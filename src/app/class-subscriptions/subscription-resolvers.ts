import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TeacherClasses } from './model';
import { SubscriptionsHttpService } from './subscription-http-service';

@Injectable({ providedIn: 'root' })
export class SubscriptionsResolvers implements Resolve<TeacherClasses[]> {
    constructor(private http: SubscriptionsHttpService) { }

    resolve(): Observable<TeacherClasses[]> {
        return this.http.list();
    }

}
