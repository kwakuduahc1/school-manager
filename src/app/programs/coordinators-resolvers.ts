import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Coordinators } from '../dtos/model';
import { CoordinatorsHttpService } from './coordinators-http';

@Injectable({ providedIn: 'root' })
export class CoordinatorsResolver implements Resolve<Coordinators[]> {
    constructor(private http: CoordinatorsHttpService) { }

    resolve(): Observable<Coordinators[]> {
        return this.http.all();
    }
}

@Injectable({ providedIn: 'root' })
export class ProgramCoordinatorsResolver implements Resolve<Coordinators[]> {
    constructor(private http: CoordinatorsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Coordinators[]> {
        return this.http.list(parseInt(route.paramMap.get('id') as string, 10));
    }

}
