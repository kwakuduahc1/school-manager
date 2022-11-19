import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamScheduleRoutingModule } from './exam-schedule-routing.module';
import { ClassSchedulesComponent } from './components/class-schedules/class-schedules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClassSchedulesComponent
  ],
  imports: [
    CommonModule,
    ExamScheduleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ExamScheduleModule { }
