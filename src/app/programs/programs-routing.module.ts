import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordinatorsComponent } from './components/coordinators/coordinators.component';
import { EditProgramComponent } from './components/edit-program/edit-program.component';
import { ListProgramsComponent } from './components/list-programs/list-programs.component';
import { CoordinatorsResolver, ProgramCoordinatorsResolver } from './coordinators-resolvers';
import { FindProgramResolvers, ProgramsListResolvers } from './programs-resolvers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListProgramsComponent,
    resolve: {
      programs: ProgramsListResolvers
    }
  },
  {
    path: 'edit/:id',
    component: EditProgramComponent,
    resolve: {
      program: FindProgramResolvers
    }
  },
  {
    path: ':id/coordinators',
    component: CoordinatorsComponent,
    resolve: {
      coordinators: CoordinatorsResolver,
      program: FindProgramResolvers,
      all: CoordinatorsResolver,
      coord: ProgramCoordinatorsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
