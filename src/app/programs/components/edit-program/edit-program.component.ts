/* eslint-disable max-len */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Programs } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { ProgramsHttpService } from '../../programs-http';

@Component({
  selector: 'bs-edit-program',
  templateUrl: './edit-program.component.html',
  styleUrls: ['./edit-program.component.scss']
})
export class EditProgramComponent implements OnInit {

  prog: Programs;
  form: FormGroup;
  constructor(
    title: Title,
    route: ActivatedRoute,
    private http: ProgramsHttpService,
    private toast: ToastrService,
    private conf: ConfirmDialogService,
    public act: ActivityProvider,
    private router: Router
  ) {
    title.setTitle('Programs');
    this.prog = route.snapshot.data.program;
    this.form = new FormGroup({
      programTitle: new FormControl(this.prog.programTitle, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])),
      programCode: new FormControl(this.prog.programCode, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)]))
    });
  }

  ngOnInit(): void {
  }

  save(prog: Programs) {
    if (this.form.dirty) {
      this.conf.confirm('Save the changes').subscribe((ans: boolean) => {
        if (ans) {
          prog.programsID = this.prog.programsID;
          this.http.edit(prog).subscribe(res => {
            this.toast.success('The changs were saved');
            this.router.navigate(['/programs']);
          });
        }
      });
    }
    else {
      this.toast.info('No changes were detected');
    }
  }
}
