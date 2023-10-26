
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnotacaoRoutingModule } from './anotacao-routing.module';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { AnotacaoDetalhesComponent } from './detalhes/anotacao-detalhes/anotacao-detalhes.component';
import { AnotacaoComponent } from './anotacao.component';
import { AnotacaoUsuarioComponent } from './anotacao-usuario/anotacao-usuario.component';





@NgModule({
  declarations: [
    AnotacaoComponent,
    AnotacaoUsuarioComponent,
    DetalhesComponent,
    AnotacaoDetalhesComponent,


  ],
  imports: [
    CommonModule,
    AnotacaoRoutingModule,
    ReactiveFormsModule


  ]
})
export class AnotacaoModule { }
