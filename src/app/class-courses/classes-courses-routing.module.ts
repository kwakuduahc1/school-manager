import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindClassResolvers } from '../classes/class-resolvers';
import { ClassCoursesResolvers, ClassSemestersCoursesListResolvers, FindSemesterClassResolvers } from './class-courses-resolvers';
import { ClassCoursesComponent } from './components/class-courses/class-courses.component';

const routes: Routes = [
  {
    path: ':id/list',
    component: ClassCoursesComponent,
    resolve: {
      courses: ClassSemestersCoursesListResolvers,
      list: ClassCoursesResolvers,
      class: FindSemesterClassResolvers
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassCoursesRoutingModule { }
