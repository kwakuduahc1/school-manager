import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../environments/environment';
import { ClassSemestersCourses, Courses } from '../dtos/model';

@Injectable({ providedIn: 'root' })
export class ClassSemestersCoursesHttpService {
    constructor(private http: HttpClient) { }

    list(id: number): Observable<ClassSemestersCourses[]> {
        return this.http.get<ClassSemestersCourses[]>(APP_CONFIG.url + `ClassSemesterCourses/List?id=${id}`);
    }

    find(id: number): Observable<ClassSemestersCourses> {
        return this.http.get<ClassSemestersCourses>(APP_CONFIG.url + `ClassSemesterCourses/Find?id=${id}`);
    }

    findClass(id: number): Observable<ClassSemestersCourses> {
        return this.http.get<ClassSemestersCourses>(APP_CONFIG.loginUrl + `ClassSemesters/Find?id=${id}`);
    }

    add(prog: ClassSemestersCourses): Observable<ClassSemestersCourses> {
        return this.http.post<ClassSemestersCourses>(APP_CONFIG.url + `ClassSemesterCourses/Create`, prog);
    }

    edit(prog: ClassSemestersCourses): Observable<ClassSemestersCourses> {
        return this.http.post<ClassSemestersCourses>(APP_CONFIG.url + `ClassSemesterCourses/Edit`, prog);
    }

    delete(course: ClassSemestersCourses): Observable<ClassSemestersCourses> {
        return this.http.post<ClassSemestersCourses>(APP_CONFIG.url + `ClassSemesterCourses/Delete`, course);
    }

    courses(id: number): Observable<Courses[]> {
        return this.http.get<Courses[]>(APP_CONFIG.url + `Courses/List?id=${id}`);
    }
}
