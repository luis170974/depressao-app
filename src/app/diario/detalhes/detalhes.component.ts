import { Anotacao } from './../models/diario-anotacoes.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit {

  public anotacao: Anotacao;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.anotacao = this.route.snapshot.data['anotacao'];
  }


}
