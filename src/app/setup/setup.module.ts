import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { ProgramsComponent } from './components/programs/programs.component';


@NgModule({
  declarations: [
    ProgramsComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule
  ]
})
export class SetupModule { }
