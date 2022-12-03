import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindClassSchedulesResolvers } from '../exam-schedule/exams-schedule-resolver';
import { ClassReportComponent } from './components/class-report/class-report.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { ViewResultsComponent } from './components/view-results/view-results.component';
import { ClassReportResolvers, ViewResultsResolvers } from './results-resolvers';
import { StudentsListResolvers } from './students-resolvers';

const routes: Routes = [
  {
    path: ':id',
    pathMatch: 'full',
    component: DataEntryComponent,
    resolve: {
      students: StudentsListResolvers,
      sch: FindClassSchedulesResolvers
    },
  },
  {
    path: ':id/view-results',
    component: ViewResultsComponent,
    resolve: {
      results: ViewResultsResolvers,
      course: FindClassSchedulesResolvers
    }
  },
  {
    path: 'class-report/:id',
    component: ClassReportComponent,
    resolve: {
      report: ClassReportResolvers
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsEntryRoutingModule { }
