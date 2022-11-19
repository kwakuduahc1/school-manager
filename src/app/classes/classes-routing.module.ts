import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesListResolvers, FindClassResolvers } from './class-resolvers';
import { ListClassesComponent } from './components/list-classes/list-classes.component';
import { EditClassComponent } from './edit-class/edit-class.component';

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
      _class: FindClassResolvers
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
