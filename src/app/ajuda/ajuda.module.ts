
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjudaRoutingModule } from './ajuda-routing.module';
import { AjudaComponent } from './ajuda.component';
import { AlongamentoComponent } from './exercicios/alongamento/alongamento.component';
import { YogaComponent } from './exercicios/yoga/yoga.component';
import { MeditacaoComponent } from './exercicios/meditacao/meditacao.component';
import { DicasComponent } from './crise/dicas/dicas.component';
import { DepressaoComponent } from './crise/depressao/depressao.component';
import { AplicativosComponent } from './crise/aplicativos/aplicativos.component';


@NgModule({
  declarations: [
    AjudaComponent,
    AlongamentoComponent,
    YogaComponent,
    MeditacaoComponent,
    DicasComponent,
    DepressaoComponent,
    AplicativosComponent

  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    AjudaRoutingModule

  ]
})
export class AjudaModule { }
