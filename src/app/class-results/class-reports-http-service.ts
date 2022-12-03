import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassSemesterCourseReport } from '../dtos/model';
import { APP_CONFIG } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ClassResultsHttpService {
    constructor(private http: HttpClient) { }

    clsCrsRpt(id: number): Observable<ClassSemesterCourseReport> {
        return this.http.get<ClassSemesterCourseReport>(APP_CONFIG.url + `Results/ClassReport?id=${id}`);
    }

}
