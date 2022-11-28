/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { abort } from 'process';
import { Classes, ClassSemesters, ClassSemestersCourses, Courses } from '../../../dtos/model';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { ClassSemestersCoursesHttpService } from '../../class-courses-http-service';

@Component({
  selector: 'bs-class-courses',
  templateUrl: './class-courses.component.html',
  styleUrls: ['./class-courses.component.scss']
})
export class ClassCoursesComponent implements OnInit {

  cls: ClassSemesters;
  courses: ClassSemestersCourses[];
  list: Courses[];
  constructor(
    title: Title,
    route: ActivatedRoute,
    private toast: ToastrService,
    private conf: ConfirmDialogService,
    private http: ClassSemestersCoursesHttpService) {
    title.setTitle('Class courses');
    this.cls = route.snapshot.data.class;
    this.courses = route.snapshot.data.courses;
    this.list = route.snapshot.data.list;
  }

  ngOnInit(): void {
  }

  add(c: Courses) {
    if (this.courses.some(x => x.coursesID === c.coursesID)) {
      this.toast.info(`${c.courseCode} has already been added to the courses for this semester`);
    }
    else {
      this.conf.confirm(`Do you want to register ${c.courseTitle} for this semester?`).subscribe((ans: boolean) => {
        if (ans) {
          const csc: ClassSemestersCourses = {
            className: this.cls.subClass,
            mainName: this.cls.mainName,
            classSemestersID: this.cls.classSemestersID,
            courseCode: c.courseCode,
            coursesID: c.coursesID,
            courseTitle: c.courseTitle,
            isActive: true,
            semester: this.cls.semestersID
          } as unknown as ClassSemestersCourses;
          this.http.add(csc).subscribe(res => {
            this.toast.success('The course was registered for the semester');
            this.courses.unshift(res);
            c.selected = true;
          });
        }
      });
    }
  }
}
