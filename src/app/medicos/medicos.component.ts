import { MedicosService } from './services/medicos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicos } from './models/medicos.model';



@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']

})
export class MedicosComponent implements OnInit {
  public medicos$: Observable<Medicos[]>;

  public cidadeSelecionada: string;


  arrayCidades = [
    { name: 'Lages' },
    { name: 'Otacilio Costa' }

  ];



  constructor( private medicosService: MedicosService){}


  ngOnInit(): void {
  }





}
