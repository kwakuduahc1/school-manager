/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Classes, Programs } from '../../../dtos/model';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from '../../../providers/confirmation-service';
import { SubscriptionsHttpService } from '../../subscription-http-service';
import { StatusProvider } from '../../../providers/StatusProvider';
import { TeacherClasses } from '../../model';
@Component({
  selector: 'bs-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  progs: Programs[];
  constructor(
    route: ActivatedRoute,
    title: Title,
    public act: ActivityProvider,
    private toast: ToastrService,
    private http: SubscriptionsHttpService,
    private status: StatusProvider,
    private conf: ConfirmDialogService) {
    title.setTitle('Subscriptions');
    this.progs = route.snapshot.data.programs;
  }

  ngOnInit(): void {
  }

  subscribe(cls: Classes) {
    console.log(this.status.user);
    this.conf.confirm('Do you want to subscribe to ' + cls.subClass).subscribe((ans: boolean) => {
      if (ans) {
        const tcs: TeacherClasses = {
          classesID: cls.classesID,
          userID: '867419eb-f62e-4959-90dd-9754661da084' // this.status.user.usersID
        } as unknown as TeacherClasses;
        this.http.add(tcs).subscribe(() => {
          this.toast.success('The subscriptions was a success');
        });
      }
    });
  }
}
