import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProgramTypes } from '../dtos/model';
import { ProgramTypesHttpService, TypesCourses } from './exam-types-http';

@Injectable({ providedIn: 'root' })
export class ProgramTypesResolvers implements Resolve<TypesCourses[]> {
    constructor(private http: ProgramTypesHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<TypesCourses[]> {
        return this.http.list(parseInt(route.paramMap.get('id') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class FindProgramTypesResolvers implements Resolve<ProgramTypes> {
    constructor(private http: ProgramTypesHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ProgramTypes> {
        return this.http.find(parseInt(route.paramMap.get('tid') as string, 10));
    }
}
