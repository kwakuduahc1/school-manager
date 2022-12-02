import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsers } from '../dtos/IUsers';
import { TeacherAssignedCourses } from '../dtos/model';
import { CourseAssignmentsHttpService } from './course-assignments-http-service';

@Injectable({ providedIn: 'root' })
export class CourseAssignmentListResolver implements Resolve<TeacherAssignedCourses[]> {

    constructor(private http: CourseAssignmentsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<TeacherAssignedCourses[]> {
        return this.http.list(parseInt(route.paramMap.get('id') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class TeachersForCourseAssignmentListResolver implements Resolve<IUsers[]> {

    constructor(private http: CourseAssignmentsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<IUsers[]> {
        return this.http.teachers(parseInt(route.paramMap.get('id') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class MyCourseAssignmentListResolver implements Resolve<TeacherAssignedCourses[]> {

    constructor(private http: CourseAssignmentsHttpService) { }

    resolve(): Observable<TeacherAssignedCourses[]> {
        return this.http.myList();
    }
}
