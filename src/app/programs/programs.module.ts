import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ListProgramsComponent } from './components/list-programs/list-programs.component';
import { EditProgramComponent } from './components/edit-program/edit-program.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoordinatorsComponent } from './components/coordinators/coordinators.component';


@NgModule({
  declarations: [
    ListProgramsComponent,
    EditProgramComponent,
    CoordinatorsComponent
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProgramsModule { }
