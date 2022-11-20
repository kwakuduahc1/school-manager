import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemestersComponent } from './components/semesters/semesters.component';

const routes: Routes = [
  {
    path:'',
    component: SemestersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassManagementRoutingModule { }
