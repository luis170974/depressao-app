import { Component, OnInit } from '@angular/core';
import { Medicos } from '../../models/medicos.model';
import { Observable } from 'rxjs';

import { MedicosService } from '../../services/medicos.service';

@Component({
  selector: 'app-medicos-lages',
  templateUrl: './medicos-lages.component.html'
})
export class MedicosLagesComponent {

  public medicos$: Observable<Medicos[]>;


  constructor(private medicosService: MedicosService) {
    this.medicos$ = this.medicosService.selecionarTodos();

  }


}
