/* eslint-disable max-len */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Classes, Programs } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { ClassesHttpService } from '../../classes-http-service';

@Component({
  selector: 'bs-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  prog: Programs;
  form: FormGroup;
  constructor(
    title: Title,
    route: ActivatedRoute,
    private http: ClassesHttpService,
    private toast: ToastrService,
    private conf: ConfirmDialogService,
    public act: ActivityProvider,
    private router: Router
  ) {
    title.setTitle('Programs');
    this.prog = route.snapshot.data.program;
    this.form = new FormGroup({
      subClass: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])),
      mainName: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)]))
    });
  }

  ngOnInit(): void {
  }

  save(cls: Classes) {
    if (this.form.dirty) {
      this.conf.confirm('Save the changes').subscribe((ans: boolean) => {
        if (ans) {
          cls.programsID = this.prog.programsID;
          this.http.add(cls).subscribe(res => {
            this.toast.success('The changes were saved');
            this.router.navigate(['/classes']);
          });
        }
      });
    }
    else {
      this.toast.info('No changes were detected');
    }
  }
}
