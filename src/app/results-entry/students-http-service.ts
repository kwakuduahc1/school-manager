import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from '../dtos/model';
import { APP_CONFIG } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StudentsHttpService {
    constructor(private http: HttpClient) { }

    list(id: number): Observable<Students[]> {
        return this.http.get<Students[]>(APP_CONFIG.url + `Students/List?id=${id}`);
    }
}
