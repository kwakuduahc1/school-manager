import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindSemesterClassCourseResolvers, FindSemesterClassResolvers } from '../class-courses/class-courses-resolvers';
import { AssignmentsListComponent } from './components/assignments-list/assignments-list.component';
import { CourseAssignmentListResolver, TeachersForCourseAssignmentListResolver } from './course-assignments-resolvers';

const routes: Routes = [
  {
    path: ':id',
    pathMatch: 'full',
    component: AssignmentsListComponent,
    resolve: {
      course: FindSemesterClassCourseResolvers,
      list: CourseAssignmentListResolver,
      users: TeachersForCourseAssignmentListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseAssignmentRoutingModule { }
