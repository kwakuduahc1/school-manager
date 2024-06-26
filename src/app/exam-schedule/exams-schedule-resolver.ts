import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassAssessments } from '../dtos/model';
import { ExamsScheduleHttpService } from './exam-schedule-http';

@Injectable({ providedIn: 'root' })
export class ClassSchedulesResolvers implements Resolve<ClassAssessments[]> {
    constructor(private http: ExamsScheduleHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ClassAssessments[]> {
        return this.http.list(parseInt(route.paramMap.get('id') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class FindClassSchedulesResolvers implements Resolve<ClassAssessments> {
    constructor(private http: ExamsScheduleHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ClassAssessments> {
        return this.http.find(parseInt(route.paramMap.get('id') as string, 10));
    }
}
