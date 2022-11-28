import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassCoursesComponent } from './components/class-courses/class-courses.component';
import { ClassCoursesRoutingModule } from './classes-courses-routing.module';
import { NgPipesModule } from 'ngx-pipes';


@NgModule({
  declarations: [
    ClassCoursesComponent
  ],
  imports: [
    CommonModule,
    ClassCoursesRoutingModule,
    NgPipesModule
  ]
})
export class ClassCoursesModule { }
