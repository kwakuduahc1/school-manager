import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassSemesterCourseReport, FnClassReport } from '../dtos/model';
import { ClassResultsHttpService } from './class-reports-http-service';

@Injectable({ providedIn: 'root' })
export class ClassCourseReportResolver implements Resolve<ClassSemesterCourseReport> {
    constructor(private http: ClassResultsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ClassSemesterCourseReport> {
        return this.http.clsCrsRpt(parseInt(route.paramMap.get('id') as string, 10));
    }
}
