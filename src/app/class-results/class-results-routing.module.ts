import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassHomeComponent } from './components/class-home/class-home.component';

const routes: Routes = [
  {
    path: '',
    component: ClassHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassResultsRoutingModule { }
