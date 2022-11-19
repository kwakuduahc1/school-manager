import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsListResolvers } from '../programs/programs-resolvers';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionsComponent,
    resolve:{
      programs: ProgramsListResolvers
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassSubscriptionsRoutingModule { }
