
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnotacaoRoutingModule } from './anotacao-routing.module';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { AnotacaoDetalhesComponent } from './detalhes/anotacao-detalhes/anotacao-detalhes.component';
import { AnotacaoComponent } from './anotacao.component';





@NgModule({
  declarations: [
    AnotacaoComponent,
    AnotacaoDetalhesComponent,
    DetalhesComponent


  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    AnotacaoRoutingModule

  ]
})
export class AnotacaoModule { }
