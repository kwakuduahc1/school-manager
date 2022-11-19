import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Classes } from '../dtos/model';
import { ClassesHttpService } from './classes-http-service';

@Injectable({ providedIn: 'root' })
export class ClassesListResolvers implements Resolve<Classes[]> {
    constructor(private http: ClassesHttpService) { }

    resolve(): Observable<Classes[]> {
        return this.http.list();
    }
}

@Injectable({ providedIn: 'root' })
export class FindClassResolvers implements Resolve<Classes> {
    constructor(private http: ClassesHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Classes> {
        return this.http.find(parseInt(route.paramMap.get('id') as string, 10));
    }
}
