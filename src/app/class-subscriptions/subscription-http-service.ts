import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../environments/environment';
import { TeacherClasses } from './model';

@Injectable({ providedIn: 'root' })
export class SubscriptionsHttpService {
    constructor(private http: HttpClient) { }

    list(): Observable<TeacherClasses[]> {
        return this.http.get<TeacherClasses[]>(APP_CONFIG.url + `TeacherClasses/List`);
    }

    add(tsc: TeacherClasses): Observable<TeacherClasses[]> {
        return this.http.post<TeacherClasses[]>(APP_CONFIG.url + `TeacherClasses/Subscribe`, tsc);
    }

    remove(tsc: TeacherClasses): Observable<TeacherClasses[]> {
        return this.http.post<TeacherClasses[]>(APP_CONFIG.url + `TeacherClasses/UnSubscribe`, tsc);
    }
}
