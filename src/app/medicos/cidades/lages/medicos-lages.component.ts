import { Component, OnInit } from '@angular/core';
import { Medicos } from '../../models/medicos.model';
import { Observable } from 'rxjs';

import { MedicosService } from '../../services/medicos.service';

@Component({
  selector: 'app-medicos-lages',
  templateUrl: './medicos-lages.component.html',
})
export class MedicosLagesComponent  implements OnInit {

  public medicos$: Observable<Medicos[]>;

  constructor(private medicosService: MedicosService) {


  }
  ngOnInit(): void {
    this.medicos$= this.medicosService.selecionarTodos();
  }


}
