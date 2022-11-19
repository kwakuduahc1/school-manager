import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classes, Programs } from '../dtos/model';
import { APP_CONFIG } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProgramsHttpService {
    constructor(private http: HttpClient) { }

    list(): Observable<Programs[]> {
        return this.http.get<Programs[]>(APP_CONFIG.url + `Classes/List`);
    }

    classes(id: number): Observable<Classes[]> {
        return this.http.get<Classes[]>(APP_CONFIG.url + `Classes/Programs?id=${id}`);
    }

    findclass(id: number): Observable<Classes> {
        return this.http.get<Classes>(APP_CONFIG.url + `Classes/Find?id=${id}`);
    }
}
