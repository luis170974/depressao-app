
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjudaRoutingModule } from './ajuda-routing.module';
import { AjudaComponent } from './ajuda.component';
import { AlongamentoComponent } from './exercicios/alongamento/alongamento.component';
import { YogaComponent } from './exercicios/yoga/yoga.component';
import { MeditacaoComponent } from './exercicios/meditacao/meditacao.component';


@NgModule({
  declarations: [
    AjudaComponent,
    AlongamentoComponent,
    YogaComponent,
    MeditacaoComponent

  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    AjudaRoutingModule

  ]
})
export class AjudaModule { }
