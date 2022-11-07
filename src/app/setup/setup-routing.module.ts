import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsListResolvers } from './class-resolvers';
import { ProgramsComponent } from './components/programs/programs.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramsComponent,
    resolve:{
      programs: ProgramsListResolvers
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
