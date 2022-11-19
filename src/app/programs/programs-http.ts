import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programs } from '../dtos/model';
import { APP_CONFIG } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProgramsHttpService {
    constructor(private http: HttpClient) { }

    list(): Observable<Programs[]> {
        return this.http.get<Programs[]>(APP_CONFIG.loginUrl + `Programs/List`);
    }

    find(id: number): Observable<Programs> {
        return this.http.get<Programs>(APP_CONFIG.loginUrl + `Programs/Find?id=${id}`);
    }

    add(prog: Programs): Observable<Programs> {
        return this.http.post<Programs>(APP_CONFIG.loginUrl + `Programs/Create`, prog);
    }

    edit(prog: Programs): Observable<Programs> {
        return this.http.post<Programs>(APP_CONFIG.loginUrl + `Programs/Edit`, prog);
    }

    delete(prog: Programs): Observable<Programs> {
        return this.http.post<Programs>(APP_CONFIG.loginUrl + `Programs/Delete`, prog);
    }
}
