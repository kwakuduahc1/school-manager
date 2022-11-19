import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsers } from '../../../dtos/IUsers';
import { Coordinators, Programs } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { CoordinatorsHttpService } from '../../coordinators-http';

@Component({
  selector: 'app-coordinators',
  templateUrl: './coordinators.component.html',
  styleUrls: ['./coordinators.component.scss']
})
export class CoordinatorsComponent implements OnInit {

  crds: Coordinators[];
  form: FormGroup;
  users: IUsers[];
  prg: Programs;
  constructor(
    route: ActivatedRoute,
    title: Title,
    private http: CoordinatorsHttpService,
    private conf: ConfirmDialogService,
    public act: ActivityProvider,
    private toast: ToastrService) {
    title.setTitle('Coordinators');
    this.crds = route.snapshot.data.coord;
    this.users = route.snapshot.data.all;
    this.prg = route.snapshot.data.program;
    this.form = new FormGroup({
      tutor: new FormControl<IUsers | null>(null, Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
  }

  add(user: IUsers) {
    this.conf.confirm(`Do you wish to assign ${user.fullName} as a coordinator for ${this.prg.programCode}`)?.subscribe(c => {
      if (c) {
        const coord: Coordinators = {
          programsID: this.prg.programsID,
          teacherName: user.fullName,
          userID: user.id
        } as unknown as Coordinators;

        this.http.add(coord).subscribe(x => {
          this.toast.success('The user was added');
          this.form.reset();
          x.fullName = user.fullName;
          this.crds.unshift(x);
          const ix = this.users.findIndex(o => o.id === o.usersID);
          this.users.splice(ix, 1);
        });
      }
    });
  }

  remove(user: Coordinators) {
    this.conf.confirm(`Do you want to remove ${user.fullName} as a coordinator for this ${this.prg.programCode}?`)?.subscribe(c => {
      if (c) {
        this.http.delete(user).subscribe(res => {
          const ix = this.crds.findIndex(x => x.coordinatorsID === user.coordinatorsID);
          const coord = this.crds.splice(ix, 1)[0];
          this.users.push({
            fullName: coord.fullName,
            id: coord.userID
          } as unknown as IUsers);
          this.toast.success(`${user.fullName} was removed as a coordinator`);
        });
      }
    });
  }

}
