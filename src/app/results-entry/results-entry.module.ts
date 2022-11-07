import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsEntryRoutingModule } from './results-entry-routing.module';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    DataEntryComponent
  ],
  imports: [
    CommonModule,
    ResultsEntryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ResultsEntryModule { }
