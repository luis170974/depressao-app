import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable, map, take } from "rxjs";
import { Anotacao } from "../models/diario-anotacoes.model";

@Injectable({
  providedIn: 'root'
})
export class DiarioService {
  private registros: AngularFirestoreCollection<Anotacao>;

  constructor(private firestore: AngularFirestore) {
    this.registros =
      this.firestore.collection<Anotacao>("anotacoes");
  }

  public async inserir(registro: Anotacao): Promise<any> {
    if (!registro)
      return Promise.reject("Item inválido");

    const res = await this.registros.add(registro);

    registro.id = res.id;

    this.registros.doc(res.id).set(registro);
  }

  public editar(registro: Anotacao): Promise<void> {
    return this.registros.doc(registro.id).set(registro);
  }

  public excluir(registro: Anotacao): Promise<void> {
    return this.registros.doc(registro.id).delete();
  }

  public selecionarTodos(): Observable<Anotacao[]> {
    return this.registros.valueChanges();
  }

  public selecionarPorId(id: string): Observable<Anotacao>{
    return this.selecionarTodos()
    .pipe(
      take(1),
      map(anotacoes => {
        return anotacoes.filter(anotacoes => anotacoes.id === id)[0];
      })
    );

   }

}
