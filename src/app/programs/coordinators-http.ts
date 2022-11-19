import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../environments/environment';
import { Coordinators } from '../dtos/model';

@Injectable({ providedIn: 'root' })
export class CoordinatorsHttpService {
  constructor(private http: HttpClient) { }

  all(): Observable<Coordinators[]> {
    return this.http.get<Coordinators[]>(APP_CONFIG.loginUrl + `Coordinators/All`);
  }

  list(id: number): Observable<Coordinators[]> {
    return this.http.get<Coordinators[]>(APP_CONFIG.loginUrl + `Coordinators/List/${id}`);
  }

  add(user: Coordinators): Observable<Coordinators> {
    return this.http.post<Coordinators>(APP_CONFIG.loginUrl + `Coordinators/Add`, user);
  }

  delete(user: Coordinators): Observable<Coordinators> {
    return this.http.post<Coordinators>(APP_CONFIG.loginUrl + `Coordinators/Delete`, user);
  }
}
