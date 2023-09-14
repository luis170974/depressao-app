

import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MedicosComponent } from './medicos.component';
import { MedicosRoutingModule } from './medicos-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MedicosLagesComponent } from './cidades/lages/medicos-lages.component';
import { MedicosOtacilioComponent } from './cidades/otacilio/medicos-otacilio.component';



@NgModule({
  declarations: [
    MedicosComponent,
    MedicosLagesComponent,
    MedicosOtacilioComponent


  ],
  imports: [
    CommonModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MedicosRoutingModule

  ],

  schemas: [NO_ERRORS_SCHEMA]
})
export class MedicosModule { }
