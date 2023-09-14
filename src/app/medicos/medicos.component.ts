import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
})
export class MedicosComponent implements OnInit {



  arrayCidades = [
    { name: ''},
    { name: 'Lages' },
    { name: 'Otacilio Costa' }

  ];

  cidadeSelecionada: string;

  constructor(){}


  ngOnInit(): void {
    this.cidadeSelecionada = this.arrayCidades[0].name;
  }

}
