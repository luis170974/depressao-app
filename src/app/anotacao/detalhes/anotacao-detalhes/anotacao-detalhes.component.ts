import { Component, Input, OnInit } from '@angular/core';
import { Anotacao } from '../../models/diario.model';

@Component({
  selector: 'app-anotacao-detalhes',
  templateUrl: './anotacao-detalhes.component.html',
})
export class AnotacaoDetalhesComponent{
  @Input() anotacao: Anotacao;

}
