/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeacherClasses } from '../../../class-subscriptions/model';
import { SubscriptionsHttpService } from '../../../class-subscriptions/subscription-http-service';
import { Classes } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { ClassesHttpService } from '../../classes-http-service';

@Component({
  selector: 'bs-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.scss']
})
export class ListClassesComponent implements OnInit {

  classes: Classes[];

  constructor(
    title: Title,
    route: ActivatedRoute,
    public act: ActivityProvider,
    private toast: ToastrService,
    private http: ClassesHttpService,
    private conf: ConfirmDialogService) {
    title.setTitle('Classes');
    this.classes = route.snapshot.data.classes;
  }

  ngOnInit(): void {
  }

  deactivate(c: Classes) {
    this.conf.confirm('This will inactivate the class. Continue?')
      .subscribe((ans: boolean) => {
        if (ans) {
          this.http.delete(c.classesID).subscribe(() => {
            this.toast.success(`The class was ${c.isActive ? 'inactivated' : 'activated'}`);
            c.isActive = !c.isActive;
          });
        }
      });
  }
}
