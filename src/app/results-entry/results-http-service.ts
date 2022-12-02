import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassReportVM, ResultsVM, TeacherCourseReport } from '../dtos/model';
import { APP_CONFIG } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ResultsHttpService {
    constructor(private http: HttpClient) { }

    add(res: ResultsVM[]): Observable<ResultsVM[]> {
        return this.http.post<ResultsVM[]>(APP_CONFIG.url + `Results/Upload`, res);
    }

    view(id: number): Observable<ClassReportVM[]> {
        return this.http.get<ClassReportVM[]>(APP_CONFIG.url + `Results/List?id=${id}`);
    }

    report(id: number): Observable<TeacherCourseReport[]> {
        return this.http.get<TeacherCourseReport[]>(APP_CONFIG.url + `Results/Report?id=${id}`);
    }
}
