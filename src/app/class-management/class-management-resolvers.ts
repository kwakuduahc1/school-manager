// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Classes } from '../dtos/model';
// import { ClassManagementHttpService } from './classes-management-http-service';

// @Injectable({ providedIn: 'root' })
// export class ClassSemesterListResolvers implements Resolve<Classes[]> {
//     constructor(private http: ClassManagementHttpService) { }

//     resolve(): Observable<Classes[]> {
//         return this.http.list();
//     }
// }

// @Injectable({ providedIn: 'root' })
// export class FindClassResolvers implements Resolve<Classes> {
//     constructor(private http: ClassManagementHttpService) { }

//     resolve(route: ActivatedRouteSnapshot): Observable<Classes> {
//         return this.http.find(parseInt(route.paramMap.get('id') as string, 10));
//     }
// }
