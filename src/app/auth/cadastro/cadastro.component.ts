import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  public form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastrService: ToastrService,
    private afs: AngularFirestore

  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl("", [Validators.required]),
      nome: new FormControl("", [Validators.required]),
      telefone: new FormControl("", [Validators.required]),
      senha: new FormControl("", [Validators.required])


    });

  }

  get email(): AbstractControl | null {
    return this.form.get("email");
  }

  get nome(): AbstractControl | null {
    return this.form.get("nome");
  }

  get telefone(): AbstractControl | null {
    return this.form.get("telefone");
  }

  get senha(): AbstractControl | null {
    return this.form.get("senha");
  }




  public async cadastrar() {
    const email = this.email?.value;
    const nome = this.nome?.value;
    const senha = this.senha?.value;
    const telefone = this.telefone?.value;

    try {
      const resposta = await this.authService.cadastrar(email, senha);

      if (resposta?.user ) {


        const data = {
          email,
          nome,
          senha,
          telefone
        };

        this.afs.collection('usuarios').add(data);

        this.router.navigate(["/login"]);
      }

    } catch (error: any) {
      this.toastrService.error(error, "Falha na tentativa de login");
    }
  }


}
