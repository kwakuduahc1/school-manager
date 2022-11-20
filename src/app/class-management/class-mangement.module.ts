import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassManagementRoutingModule } from './class-management-routing.module';
import { SemestersComponent } from './components/semesters/semesters.component';


@NgModule({
  declarations: [
    SemestersComponent
  ],
  imports: [
    CommonModule,
    ClassManagementRoutingModule
  ]
})
export class ClassManagementModule { }
