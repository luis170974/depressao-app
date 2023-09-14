import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Anotacao } from '../models/diario-anotacoes.model';
import { DiarioService } from './diario.service';

@Injectable({
  providedIn: 'root'
})
export class DiarioResolver implements Resolve<Anotacao> {

  constructor(private diarioService: DiarioService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Anotacao> {
    return this.diarioService.selecionarPorId(route.params['id']);
  }
}
