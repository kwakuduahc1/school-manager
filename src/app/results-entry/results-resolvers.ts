import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassReportVM, ResultsVM } from '../dtos/model';
import { ResultsHttpService } from './results-http-service';

@Injectable({ providedIn: 'root' })
export class ViewResultsResolvers implements Resolve<ResultsVM[]> {

    constructor(private http: ResultsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ResultsVM[]> {
        return this.http.view(parseInt(route.paramMap.get('tid') as string, 10));
    }
}

@Injectable({ providedIn: 'root' })
export class ClassReportResolvers implements Resolve<ClassReportVM[]> {

    constructor(private http: ResultsHttpService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ClassReportVM[]> {
        return this.http.report(parseInt(route.paramMap.get('id') as string, 10));
    }
}
