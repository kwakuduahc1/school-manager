import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAdministrationRoutingModule } from './system-administration-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SystemAdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SystemAdministrationModule { }
