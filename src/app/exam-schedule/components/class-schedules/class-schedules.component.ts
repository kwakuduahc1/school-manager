/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProgramTypes, ClassAssessments, ClassSemestersCourses, TeacherCourseClassVm } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { StatusProvider } from '../../../providers/StatusProvider';
import { ExamsScheduleHttpService } from '../../exam-schedule-http';

@Component({
  selector: 'bs-class-schedules',
  templateUrl: './class-schedules.component.html',
  styleUrls: ['./class-schedules.component.scss']
})
export class ClassSchedulesComponent implements OnInit {

  schs: ClassAssessments[];
  form: FormGroup;
  tps: ProgramTypes[];
  course: TeacherCourseClassVm;
  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider,
    private toast: ToastrService,
    private status: StatusProvider,
    private http: ExamsScheduleHttpService,
    private conf: ConfirmDialogService) {
    title.setTitle('Exams schedule');
    this.tps = route.snapshot.data.types.types;
    this.course = route.snapshot.data.types.course;
    this.schs = route.snapshot.data.schedules;
    this.form = new FormGroup({
      examName: new FormControl<string>(null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(35)])),
      maxScore: new FormControl(10, Validators.compose([Validators.required, Validators.min(5), Validators.max(100)])),
      typesID: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  ngOnInit(): void {
  }

  save(sch: ClassAssessments) {
    this.conf.confirm(`A new entry as ${sch.examName} will be added?`).subscribe((ans: boolean) => {
      if (ans) {
        sch.userID = this.status.user.usersID;
        sch.courseCode = this.course.courseCode;
        sch.courseTitle = this.course.courseTitle;
        sch.classesID = this.course.classesID;
        sch.semester = this.course.semester;
        sch.teacherAssignedCoursesID = this.course.teacherAssignedCoursesID;
        this.http.add(sch).subscribe((res: ClassAssessments) => {
          this.schs.unshift(res);
          this.toast.success('The schedule was added');
          this.form.reset();
        });
      }
    });
  }
}
