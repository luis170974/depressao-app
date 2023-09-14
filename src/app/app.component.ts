import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'depressao-app';

  public usuarioLogado: Observable<firebase.User | null>;

  
}
