import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Medicos } from "../models/medicos.model";


@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private registros: AngularFirestoreCollection<Medicos>;



  constructor(private firestore: AngularFirestore) {
    this.registros =
      this.firestore.collection<Medicos>("medicos");
  }


  public selecionarTodos(): Observable<Medicos[]> {
    return this.registros.valueChanges();




  }




}
