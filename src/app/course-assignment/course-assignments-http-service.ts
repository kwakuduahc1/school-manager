import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeacherAssignedCourses } from '../dtos/model';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../environments/environment';
import { IUsers } from '../dtos/IUsers';

@Injectable({ providedIn: 'root' })
export class CourseAssignmentsHttpService {
    constructor(private http: HttpClient) { }

    list(id: number): Observable<TeacherAssignedCourses[]> {
        return this.http.get<TeacherAssignedCourses[]>(APP_CONFIG.url + `TeacherCourses/List?id=${id}`);
    }

    add(tas: TeacherAssignedCourses): Observable<TeacherAssignedCourses> {
        return this.http.post<TeacherAssignedCourses>(APP_CONFIG.url + `TeacherCourses/Create`, tas);
    }

    remove(tas: TeacherAssignedCourses): Observable<TeacherAssignedCourses> {
        return this.http.post<TeacherAssignedCourses>(APP_CONFIG.url + `TeacherCourses/Delete`, tas);
    }

    teachers(id: number): Observable<IUsers[]> {
        return this.http.get<IUsers[]>(APP_CONFIG.url + `TeacherCourses/Teachers?id=${id}`);
    }

    findNum(id: string, ix: number): Observable<number> {
        return this.http.get<number>(APP_CONFIG.url + `TeacherCourses/FindNum?uid=${id}$csi=${ix}`);
    }
}
