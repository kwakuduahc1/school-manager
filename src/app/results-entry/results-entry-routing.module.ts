import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindClassScheduleTypesResolvers } from '../exam-schedule/exams-schedule-resolver';
import { FindClassResolvers } from '../setup/class-resolvers';
import { ClassReportComponent } from './components/class-report/class-report.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { ViewResultsComponent } from './components/view-results/view-results.component';
import { ClassReportResolvers, ViewResultsResolvers } from './results-resolvers';
import { StudentsListResolvers } from './students-resolvers';

const routes: Routes = [
  {
    path: 'home/:id/:tid',
    pathMatch: 'full',
    component: DataEntryComponent,
    resolve: {
      students: StudentsListResolvers,
      class: FindClassResolvers,
      types: FindClassScheduleTypesResolvers
    },
  },
  {
    path: ':id/:tid/view-results',
    component: ViewResultsComponent,
    resolve: {
      results: ViewResultsResolvers,
      exam: FindClassScheduleTypesResolvers,
      class: FindClassResolvers
    }
  },
  {
    path: 'class-report/:id',
    component: ClassReportComponent,
    resolve: {
      report: ClassReportResolvers,
      class: FindClassResolvers
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsEntryRoutingModule { }
