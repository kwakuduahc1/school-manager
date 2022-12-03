import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassResultsRoutingModule } from './class-results-routing.module';
import { ClassHomeComponent } from './components/class-home/class-home.component';
import { ViewClassCourseReportComponent } from './components/view-class-course-report/view-class-course-report.component';
import { NgPipesModule } from 'ngx-pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClassHomeComponent,
    ViewClassCourseReportComponent
  ],
  imports: [
    CommonModule,
    ClassResultsRoutingModule,
    NgPipesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClassResultsModule { }
