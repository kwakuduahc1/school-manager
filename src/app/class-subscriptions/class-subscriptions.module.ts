import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassSubscriptionsRoutingModule } from './class-subscriptions-routing.module';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';


@NgModule({
  declarations: [
    SubscriptionsComponent
  ],
  imports: [
    CommonModule,
    ClassSubscriptionsRoutingModule
  ]
})
export class ClassSubscriptionsModule { }
