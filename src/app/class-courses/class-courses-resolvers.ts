import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassSemestersCourses, Courses } from '../dtos/model';
import { ClassSemestersCoursesHttpService } from './class-courses-http-service';

@Injectable({ providedIn: 'root' })
export class ClassSemestersCoursesListResolvers implements Resolve<ClassSemestersCourses[]> {
    constructor(private http: ClassSemestersCoursesHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ClassSemestersCourses[]> {
        return this.http.list(parseInt(route.paramMap.get('id') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class FindSemesterClassResolvers implements Resolve<ClassSemestersCourses> {
    constructor(private http: ClassSemestersCoursesHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ClassSemestersCourses> {
        return this.http.findClass(parseInt(route.paramMap.get('id') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class FindSemesterClassCourseResolvers implements Resolve<ClassSemestersCourses> {
    constructor(private http: ClassSemestersCoursesHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ClassSemestersCourses> {
        return this.http.findClassCourse(parseInt(route.paramMap.get('id') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class ClassCoursesResolvers implements Resolve<Courses[]> {
    constructor(private http: ClassSemestersCoursesHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Courses[]> {
        return this.http.courses(parseInt(route.paramMap.get('id') as string, 10));
    }
}
