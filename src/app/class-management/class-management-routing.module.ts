import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindClassResolvers } from '../classes/class-resolvers';
import { ClassSemesterListResolvers, FindClassSemesterResolvers } from './class-semesters-resolvers';
import { SemestersComponent } from './components/semesters/semesters.component';

const routes: Routes = [
  {
    path:'',
    component: SemestersComponent,
    resolve:{
      sems: ClassSemesterListResolvers,
      class: FindClassResolvers
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassManagementRoutingModule { }
