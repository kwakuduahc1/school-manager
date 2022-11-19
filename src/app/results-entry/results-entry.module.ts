import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsEntryRoutingModule } from './results-entry-routing.module';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ViewResultsComponent } from './components/view-results/view-results.component';
import { NgPipesModule } from 'ngx-pipes';
import { ClassReportComponent } from './components/class-report/class-report.component';


@NgModule({
  declarations: [
    DataEntryComponent,
    ViewResultsComponent,
    ClassReportComponent
  ],
  imports: [
    CommonModule,
    ResultsEntryRoutingModule,
    FormsModule,
    NgPipesModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ResultsEntryModule { }
