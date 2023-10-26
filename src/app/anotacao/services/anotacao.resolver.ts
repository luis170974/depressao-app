import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Anotacao } from '../models/anotacao.model';
import { AnotacaoService } from './anotacao.service';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoResolver implements Resolve<Anotacao> {

  constructor(private anotacaoService: AnotacaoService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Anotacao> {
    return this.anotacaoService.selecionarPorId(route.params['id']);
  }
}
