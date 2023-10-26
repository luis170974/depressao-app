import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, take } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public usuarioLogado: Observable<firebase.User | null>;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) {

    this.usuarioLogado = auth.authState;

  }

  public cadastrar(email: string, senha: string): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, senha)
  }

  public login(email: string, senha: string): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, senha);
  }

  public logout(): Promise<void> {
    return this.auth.signOut();
  }

  public resetarSenha(email: string): Promise<void> {
    return this.auth.sendPasswordResetEmail(email);
  }

  public selecionarUsuarioLogado(email: string): Observable<firebase.User> {
    return this.firestore
      .collection<firebase.User>("usuarios", ref => {
        return ref.where("email", "==", email)
      })
      .valueChanges()
      .pipe(
        take(1),
        map(usuarios => usuarios[0])
      )
  }


}
