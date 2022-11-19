import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IRoles, IUsers } from '../dtos/IUsers';
import { LoginHttpService } from '../http/login-http-service';

@Injectable({ providedIn: 'root' })
export class RolesResolver implements Resolve<IRoles[]> {
    constructor(private http: LoginHttpService){}

    resolve(): Observable<IRoles[]> {
        return this.http.roles();
    }

}

@Injectable({ providedIn: 'root' })
export class UsersResolver implements Resolve<IUsers[]> {
    constructor(private http: LoginHttpService){}

    resolve(): Observable<IUsers[]> {
        return this.http.users();
    }

}
