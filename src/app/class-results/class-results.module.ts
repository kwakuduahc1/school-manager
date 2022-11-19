import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassResultsRoutingModule } from './class-results-routing.module';
import { ClassHomeComponent } from './components/class-home/class-home.component';


@NgModule({
  declarations: [
    ClassHomeComponent
  ],
  imports: [
    CommonModule,
    ClassResultsRoutingModule
  ]
})
export class ClassResultsModule { }
