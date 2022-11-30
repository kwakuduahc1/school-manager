import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseAssignmentRoutingModule } from './course-assignment-routing.module';
import { AssignmentsListComponent } from './components/assignments-list/assignments-list.component';


@NgModule({
  declarations: [
    AssignmentsListComponent
  ],
  imports: [
    CommonModule,
    CourseAssignmentRoutingModule
  ]
})
export class CourseAssignmentModule { }
