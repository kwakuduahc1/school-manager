import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassSchedulesComponent } from './components/class-schedules/class-schedules.component';

const routes: Routes = [
  {
    path: '',
    component: ClassSchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamScheduleRoutingModule { }
