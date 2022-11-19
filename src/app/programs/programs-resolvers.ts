import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Programs } from '../dtos/model';
import { ProgramsHttpService } from './programs-http';


@Injectable({ providedIn: 'root' })
export class FindProgramResolvers implements Resolve<Programs> {
    constructor(private http: ProgramsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Programs> {
        return this.http.find(parseInt(route.paramMap.get('id') as string, 10));
    }

}
@Injectable({ providedIn: 'root' })
export class ProgramsListResolvers implements Resolve<Programs[]> {
    constructor(private http: ProgramsHttpService) { }

    resolve(): Observable<Programs[]> {
        return this.http.list();
    }

}
