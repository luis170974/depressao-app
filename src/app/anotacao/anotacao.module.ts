
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AnotacaoRoutingModule } from './anotacao-routing.module';
import { AnotacaoComponent } from './anotacao.component';
import { AnotacaoUsuarioComponent } from './anotacao-usuario/anotacao-usuario.component';







@NgModule({
  declarations: [
    AnotacaoComponent,
    AnotacaoUsuarioComponent


  ],
  imports: [
    CommonModule,
    AnotacaoRoutingModule,
    ReactiveFormsModule


  ]
})
export class AnotacaoModule { }
