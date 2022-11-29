/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClassSemesters, ClassSemestersCourses, Courses } from '../../../dtos/model';
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

  remove(c: ClassSemestersCourses) {
    this.conf.confirm('Do you wish to remove this course from the semester?').subscribe((ans: boolean) => {
      if (ans) {
        this.http.delete(c).subscribe(res => {
          const ix = this.courses.findIndex(p => p.classSemesterCoursesID === c.classSemesterCoursesID);
          this.courses.splice(ix, 1);
          this.toast.success('The course was unregistered');
          const cix = this.list.find(x => x.coursesID === c.coursesID);
          cix.selected = false;
        });
      }
    });
  }
}
