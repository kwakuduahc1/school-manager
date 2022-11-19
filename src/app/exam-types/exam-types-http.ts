import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgramTypes } from '../dtos/model';
import { APP_CONFIG } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProgramTypesHttpService {
    constructor(private http: HttpClient) { }

    list(id: number): Observable<ProgramTypes[]> {
        return this.http.get<ProgramTypes[]>(APP_CONFIG.url + `ProgramAssessTypes/List?id=${id}`);
    }

    find(id: number): Observable<ProgramTypes> {
        return this.http.get<ProgramTypes>(APP_CONFIG.url + `ProgramAssessTypes/Find?id=${id}`);
    }
}
