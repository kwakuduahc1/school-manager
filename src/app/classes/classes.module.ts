import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ListClassesComponent } from './components/list-classes/list-classes.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListClassesComponent,
    EditClassComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClassesModule { }
