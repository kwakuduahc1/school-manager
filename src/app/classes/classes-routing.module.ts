import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesListResolvers, FindClassResolvers } from './class-resolvers';
import { ListClassesComponent } from './components/list-classes/list-classes.component';
import { EditClassComponent } from './components/edit-class/edit-class.component';
import { FindProgramResolvers } from '../programs/programs-resolvers';
import { AddClassComponent } from './components/add-class/add-class.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListClassesComponent,
    resolve: {
      classes: ClassesListResolvers
    }
  },
  {
    path: 'edit/:id',
    component: EditClassComponent,
    resolve: {
      class: FindClassResolvers
    }
  },
  {
    path: 'add/:id',
    component: AddClassComponent,
    resolve: {
      program: FindProgramResolvers
    }
  },
  {
    path: 'manage/:id',
    loadChildren: () => import('../class-management/class-mangement.module').then(r => r.ClassManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
