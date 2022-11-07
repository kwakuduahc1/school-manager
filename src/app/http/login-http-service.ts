import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginVm } from '../dtos/IUsers';
import { APP_CONFIG } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class LoginHttpService {
  constructor(private http: HttpClient) {
  }

  login(st: LoginVm): Observable<{ token: string }> {
    console.log('pp');

    return this.http.post<{ token: string }>(`${APP_CONFIG.loginUrl}Auth/Login`, st);
  }

  signout(): Observable<any> {
    return this.http.post(`${APP_CONFIG.loginUrl}Auth/Signout`, {});
  }
}
