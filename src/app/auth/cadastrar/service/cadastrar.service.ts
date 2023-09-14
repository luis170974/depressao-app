import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable, map, take } from "rxjs";
import { CadastroUsuario } from "../models/cadastro-usuario.model";

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {
  private registros: AngularFirestoreCollection<CadastroUsuario>;

  constructor(private firestore: AngularFirestore) {
    this.registros =
      this.firestore.collection<CadastroUsuario>("usuarios");
  }

  public async inserir(registro: CadastroUsuario): Promise<any> {
    if (!registro)
      return Promise.reject("Item inválido");

    const res = await this.registros.add(registro);

    registro.id = res.id;

    this.registros.doc(res.id).set(registro);
  }

  public selecionarFuncionarioLogado(email: string): Observable<CadastroUsuario> {
    return this.firestore
      .collection<CadastroUsuario>("usuarios", ref => {
        return ref.where("email", "==", email)
      })
      .valueChanges()
      .pipe(
        take(1),
        map(funcionarios => funcionarios[0])
      )
  }



}
