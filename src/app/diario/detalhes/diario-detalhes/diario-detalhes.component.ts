import { Component, Input, OnInit } from '@angular/core';
import { Anotacao } from '../../models/diario-anotacoes.model';


@Component({
  selector: 'app-diario-detalhes',
  templateUrl: './diario-detalhes.component.html',
})
export class DiarioDetalhesComponent{
  @Input() anotacao: Anotacao;

}
