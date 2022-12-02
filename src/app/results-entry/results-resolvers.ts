import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassReportVM, ResultsVM, TeacherCourseReport } from '../dtos/model';
import { ResultsHttpService } from './results-http-service';

@Injectable({ providedIn: 'root' })
export class ViewResultsResolvers implements Resolve<ClassReportVM[]> {

    constructor(private http: ResultsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ClassReportVM[]> {
        return this.http.view(parseInt(route.paramMap.get('id') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class ClassReportResolvers implements Resolve<TeacherCourseReport[]> {

    constructor(private http: ResultsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<TeacherCourseReport[]> {
        return this.http.report(parseInt(route.paramMap.get('id') as string, 10));
    }
}
