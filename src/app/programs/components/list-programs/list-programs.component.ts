/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Programs } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { ProgramsHttpService } from '../../programs-http';

@Component({
  selector: 'bs-list-programs',
  templateUrl: './list-programs.component.html',
  styleUrls: ['./list-programs.component.scss']
})
export class ListProgramsComponent implements OnInit {

  progs: Programs[];
  form: FormGroup;
  constructor(
    title: Title,
    route: ActivatedRoute,
    private http: ProgramsHttpService,
    private toast: ToastrService,
    private conf: ConfirmDialogService,
    public act: ActivityProvider
  ) {
    title.setTitle('Programs');
    this.progs = route.snapshot.data.programs;
    this.form = new FormGroup({
      programTitle: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])),
      programCode: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)]))
    });
  }

  ngOnInit(): void {
  }

  save(prog: Programs) {
    this.conf.confirm('Add a new program').subscribe((ans: boolean) => {
      if (ans) {
        this.http.add(prog).subscribe(res => {
          this.progs.unshift(res);
          this.toast.success('The program was added');
        });
      }
    });
  }
}
