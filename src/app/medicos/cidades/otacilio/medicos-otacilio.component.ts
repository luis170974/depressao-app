import { Component, OnInit } from '@angular/core';
import { Medicos } from '../../models/medicos.model';
import { Observable } from 'rxjs';
import { MedicosService } from '../../services/medicos.service';


@Component({
  selector: 'app-medicos-otacilio',
  templateUrl: './medicos-otacilio.component.html'


})
export class MedicosOtacilioComponent implements OnInit {
  public medicos$: Observable<Medicos[]>;


  constructor(private medicosService: MedicosService){}


  ngOnInit(): void {
    this.medicos$ = this.medicosService.selecionarTodos();
  }

}
