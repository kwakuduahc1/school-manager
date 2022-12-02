import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassAssessments } from '../dtos/model';
import { APP_CONFIG } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ExamsScheduleHttpService {
    constructor(private http: HttpClient) { }

    list(id: number): Observable<ClassAssessments[]> {
        return this.http.get<ClassAssessments[]>(APP_CONFIG.url + `ExamsSchedule/List?id=${id}`);
    }

    find(id: number): Observable<ClassAssessments> {
        return this.http.get<ClassAssessments>(APP_CONFIG.url + `ExamsSchedule/Find?id=${id}`);
    }

    add(res: ClassAssessments): Observable<ClassAssessments> {
        return this.http.post<ClassAssessments>(APP_CONFIG.url + `ExamsSchedule/Create`, res);
    }

    delete(res: ClassAssessments): Observable<ClassAssessments> {
        return this.http.post<ClassAssessments>(APP_CONFIG.url + `ExamsSchedule/Create`, res);
    }
}
