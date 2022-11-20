/* eslint-disable max-len */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Classes } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { ClassesHttpService } from '../../classes-http-service';

@Component({
  selector: 'bs-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit {

  cls: Classes;
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
    this.cls = route.snapshot.data.class;
    this.form = new FormGroup({
      subClass: new FormControl(this.cls.subClass, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])),
      mainName: new FormControl(this.cls.mainName, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)]))
    });
  }

  ngOnInit(): void {
  }

  save(cls: Classes) {
    if (this.form.dirty) {
      this.conf.confirm('Save the changes').subscribe((ans: boolean) => {
        if (ans) {
          this.cls.subClass = cls.subClass;
          this.cls.mainName = cls.mainName;
          this.http.edit(this.cls).subscribe(res => {
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
