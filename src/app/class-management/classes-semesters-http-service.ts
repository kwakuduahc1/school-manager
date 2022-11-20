import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classes, ClassSemesters } from '../dtos/model';
import { APP_CONFIG } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ClassSemestersHttpService {
    constructor(private http: HttpClient) { }

    list(id: number): Observable<ClassSemesters[]> {
        return this.http.get<ClassSemesters[]>(APP_CONFIG.loginUrl + `ClassSemesters/List?cid=${id}`);
    }

    find(id: number): Observable<ClassSemesters> {
        return this.http.get<ClassSemesters>(APP_CONFIG.loginUrl + `ClassSemesters/Find?id=${id}`);
    }

    add(sem: Classes): Observable<ClassSemesters> {
        return this.http.post<ClassSemesters>(APP_CONFIG.loginUrl + `ClassSemesters/Create`, sem);
    }

    edit(sem: ClassSemesters): Observable<ClassSemesters> {
        return this.http.post<ClassSemesters>(APP_CONFIG.loginUrl + `ClassSemesters/Edit`, sem);
    }

    delete(cls: Classes) {
        return this.http.post(APP_CONFIG.loginUrl + `ClassSemesters/Delete`, cls);
    }
}
