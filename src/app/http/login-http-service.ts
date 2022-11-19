import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRoles, IUsers, LoginVm } from '../dtos/IUsers';
import { APP_CONFIG } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class LoginHttpService {
  constructor(private http: HttpClient) {
  }

  login(st: LoginVm): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${APP_CONFIG.loginUrl}Auth/Login`, st);
  }

  signout(): Observable<any> {
    return this.http.post(`${APP_CONFIG.loginUrl}Auth/Signout`, {});
  }

  register(usr: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(`${APP_CONFIG.loginUrl}Auth/Register`, usr);
  }

  delete(user: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(APP_CONFIG.loginUrl + `Users/RemoveUser`, user);
  }

  roles(): Observable<IRoles[]> {
    return this.http.get<IRoles[]>(APP_CONFIG.loginUrl + `Roles/List`);
  }

  users(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(APP_CONFIG.loginUrl + `Users/List`);
  }
}
