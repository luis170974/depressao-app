import { DiarioComponent } from './diario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiarioRoutingModule } from './diario-routing.module';
import { DiarioDetalhesComponent } from './detalhes/diario-detalhes/diario-detalhes.component';
import { DetalhesComponent } from './detalhes/detalhes.component';





@NgModule({
  declarations: [
    DiarioComponent,
    DiarioDetalhesComponent,
    DetalhesComponent


  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    DiarioRoutingModule

  ]
})
export class DiarioModule { }
