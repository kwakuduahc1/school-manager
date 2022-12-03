import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassCourseReportResolver } from './class-results-resolvers';
import { ClassHomeComponent } from './components/class-home/class-home.component';
import { ViewClassCourseReportComponent } from './components/view-class-course-report/view-class-course-report.component';

const routes: Routes = [
  {
    path: ':id',
    component: ViewClassCourseReportComponent,
    resolve: {
      report: ClassCourseReportResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassResultsRoutingModule { }
