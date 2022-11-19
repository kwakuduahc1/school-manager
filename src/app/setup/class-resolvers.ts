import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Classes, Programs } from '../dtos/model';
import { ProgramsHttpService } from './classes-http-service';

@Injectable({ providedIn: 'root' })
export class ClassesResolvers implements Resolve<Classes[]> {
    constructor(private http: ProgramsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Classes[]> {
        return this.http.classes(parseInt(route.paramMap.get('id') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class FindClassResolvers implements Resolve<Classes> {
    constructor(private http: ProgramsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Classes> {
        return this.http.findclass(parseInt(route.paramMap.get('id') as string, 10));
    }

}
@Injectable({ providedIn: 'root' })
export class ProgramsListResolvers implements Resolve<Programs[]> {
    constructor(private http: ProgramsHttpService) { }

    resolve(): Observable<Programs[]> {
        return this.http.list();
    }

}
