import { MedicosService } from './services/medicos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicos } from './models/medicos.model';



@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
})
export class MedicosComponent implements OnInit {
  public medicos$: Observable<Medicos[]>;

  public cidadeSelecionada: string;


  arrayCidades = [
    { id: '0', name: 'Lages' },
    { id: '1', name: 'Otacilio Costa' }

  ];



  constructor( private medicosService: MedicosService){}


  ngOnInit(): void {
  }





}
