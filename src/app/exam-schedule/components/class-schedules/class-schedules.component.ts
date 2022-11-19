/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProgramTypes, Classes, ClassAssessments } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { ExamsScheduleHttpService } from '../../exam-schedule-http';

@Component({
  selector: 'bs-class-schedules',
  templateUrl: './class-schedules.component.html',
  styleUrls: ['./class-schedules.component.scss']
})
export class ClassSchedulesComponent implements OnInit {

  schs: ClassAssessments[];
  form: FormGroup;
  tps: ProgramTypes;
  cls: Classes;
  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider,
    private toast: ToastrService,
    private http: ExamsScheduleHttpService,
    private conf: ConfirmDialogService) {
    title.setTitle('Home');
    this.tps = route.snapshot.data.types;
    this.cls = route.snapshot.data.class;
    this.schs = route.snapshot.data.schedules;
    this.form = new FormGroup({
      examName: new FormControl<string>(`${this.tps.typeName} ${this.schs.length + 1}`,
        Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(35)])),
      semester: new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.max(6)])),
      maxScore: new FormControl('', Validators.compose([Validators.required, Validators.min(5), Validators.max(100)])),
      course: new FormControl<string>(``,Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(75)])),
    });
  }

  ngOnInit(): void {
  }

  save(sch: ClassAssessments) {
    this.conf.confirm(`A new entry as ${sch.examName} will be added?`).subscribe((ans: boolean) => {
      if (ans) {
        sch.userID = '867419eb-f62e-4959-90dd-9754661da084';
        sch.classesID = this.cls.classesID;
        sch.typesID = this.tps.typesID;
        this.http.add(sch).subscribe((res: ClassAssessments) => {
          this.schs.unshift(res);
          this.toast.success('The schedule was added');
          this.form.reset();
        });
      }
    });
  }
}
