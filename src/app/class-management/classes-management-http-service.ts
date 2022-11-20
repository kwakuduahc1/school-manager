// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Classes } from '../dtos/model';
// import { APP_CONFIG } from '../../environments/environment';

// @Injectable({ providedIn: 'root' })
// export class ClassManagementHttpService {
//     constructor(private http: HttpClient) { }

//     list(): Observable<Classes[]> {
//         return this.http.get<Classes[]>(APP_CONFIG.loginUrl + `Classes/List`);
//     }

//     find(id: number): Observable<Classes> {
//         return this.http.get<Classes>(APP_CONFIG.loginUrl + `Classes/Find?id=${id}`);
//     }

//     add(prog: Classes): Observable<Classes> {
//         return this.http.post<Classes>(APP_CONFIG.loginUrl + `Classes/Create`, prog);
//     }

//     edit(prog: Classes): Observable<Classes> {
//         return this.http.post<Classes>(APP_CONFIG.loginUrl + `Classes/Edit`, prog);
//     }

//     delete(id: number): Observable<Classes> {
//         return this.http.delete<Classes>(APP_CONFIG.loginUrl + `Classes/Delete/${id}`);
//     }
// }
