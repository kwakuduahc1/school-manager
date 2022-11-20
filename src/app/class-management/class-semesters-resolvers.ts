import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassSemesters } from '../dtos/model';
import { ClassSemestersHttpService } from './classes-semesters-http-service';

@Injectable({ providedIn: 'root' })
export class ClassSemesterListResolvers implements Resolve<ClassSemesters[]> {
    constructor(private http: ClassSemestersHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ClassSemesters[]> {
        return this.http.list(parseInt(route.paramMap.get('id') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class FindClassSemesterResolvers implements Resolve<ClassSemesters> {
    constructor(private http: ClassSemestersHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ClassSemesters> {
        return this.http.find(parseInt(route.paramMap.get('id') as string, 10));
    }
}
