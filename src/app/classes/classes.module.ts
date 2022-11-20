import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ListClassesComponent } from './components/list-classes/list-classes.component';
import { EditClassComponent } from './components/edit-class/edit-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClassComponent } from './components/add-class/add-class.component';


@NgModule({
  declarations: [
    ListClassesComponent,
    EditClassComponent,
    AddClassComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClassesModule { }
