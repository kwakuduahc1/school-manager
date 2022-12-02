/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsers } from '../../../dtos/IUsers';
import { ClassSemesters, ClassSemestersCourses, TeacherAssignedCourses } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { CourseAssignmentsHttpService } from '../../course-assignments-http-service';

@Component({
  selector: 'bs-assignments-list',
  templateUrl: './assignments-list.component.html',
  styleUrls: ['./assignments-list.component.scss']
})
export class AssignmentsListComponent implements OnInit {

  users: Teachers[];
  course: ClassSemestersCourses;
  tchrs: TeacherAssignedCourses[];
  constructor(
    route: ActivatedRoute,
    private toast: ToastrService,
    private conf: ConfirmDialogService,
    public act: ActivityProvider,
    private http: CourseAssignmentsHttpService) {
    this.users = route.snapshot.data.users;
    this.course = route.snapshot.data.course;
    this.tchrs = route.snapshot.data.list;
  }

  ngOnInit(): void {
  }

  add(t: Teachers) {
    this.conf.confirm(`Do you wish to assign ${t.fullName} to the course?`).subscribe((ans: boolean) => {
      if (ans) {
        const crs: TeacherAssignedCourses = {
          className: this.course.className,
          classSemesterCoursesID: this.course.classSemesterCoursesID,
          courseCode: this.course.courseCode,
          coursesID: this.course.coursesID,
          courseTitle: this.course.courseTitle,
          isActive: true,
          semester: this.course.semester,
          teacherName: t.fullName,
          userID: t.usersID,
          userName: t.userName,
          classesID: this.course.classesID
        } as unknown as TeacherAssignedCourses;
        this.http.add(crs).subscribe(res => {
          this.tchrs.unshift(res);
          t.selected = true;
          t.courses = + 1;
          this.toast.success(`${t.fullName} was assigned to the course`);
        });
      }
    });
  }

  remove(tas: TeacherAssignedCourses) {
    this.conf.confirm('Do you wish to unassign the teacher?').subscribe((ans: boolean) => {
      if (ans) {
        this.http.remove(tas).subscribe(() => {
          this.toast.success('The teacher was unassigned');
          const ix = this.tchrs.findIndex(x => x.teacherAssignedCoursesID === tas.teacherAssignedCoursesID);
          const usr = this.users.find(p => p.usersID === tas.userID);
          if (usr) {
            usr.selected = false;
          }
          else {
            const u: Teachers = {
              fullName: tas.teacherName,
              id: tas.userID,
              usersID: tas.userID,
              userName: tas.userName,
              selected: false,
              confirmPassword: '',
              password: '',
              courses: this.findNum(tas.userID, tas.classSemesterCoursesID)
            };
            this.users.unshift(u);
          }
          this.tchrs.splice(ix, 1);
        });
      }
    });
  }

  findNum(id: string, ix: number) {
    let num = 0;
    this.http.findNum(id, ix).subscribe(r => num = r);
    return num;
  }
}

export interface Teachers extends IUsers {
  courses: number;
  selected: boolean;
}
