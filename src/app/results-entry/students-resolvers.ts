import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Students } from '../dtos/model';
import { StudentsHttpService } from './students-http-service';

@Injectable({ providedIn: 'root' })
export class StudentsListResolvers implements Resolve<Students[]> {
    constructor(private http: StudentsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Students[]> {
        return this.http.list(parseInt(route.paramMap.get('id') as string, 10));
    }
}
