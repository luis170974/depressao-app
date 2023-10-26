import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Anotacao } from '../models/anotacao.model';
import { AnotacaoService } from '../services/anotacao.service';
import { dataFuturaValidator } from 'src/app/shared/data-futura.validator';


@Component({
  selector: 'app-anotacao-usuario',
  templateUrl: './anotacao-usuario.component.html',
})
export class AnotacaoUsuarioComponent {
  public usuarioLogado: firebase.User;
  public anotacoes$: Observable<Anotacao[]>;
  public form: FormGroup;



  private processoAutenticado$: Subscription;

  constructor(
    private authService: AuthenticationService,
    private anotacaoService: AnotacaoService,
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: new FormControl(""),
      titulo: new FormControl("", [Validators.required]),
      pergunta: new FormControl("", [Validators.required]),
      texto: new FormControl("", [Validators.required]),
      dataAnotacao: new FormControl("",[Validators.required, dataFuturaValidator()]),
      userEmail: new FormControl(""),
    });



    this.processoAutenticado$ = this.authService.usuarioLogado.subscribe(usuario => {
      const email: string = usuario?.email!;

      this.authService.selecionarUsuarioLogado(email)
      .subscribe(usuario => this.usuarioLogado = usuario);

      this.anotacoes$ = this.anotacaoService.selecionarPorUserEmail(email);

  });

  }

  ngOnDestroy(): void {
    this.processoAutenticado$.unsubscribe();
  }

  get id(): AbstractControl | null {
    return this.form.get("id");
  }

  get titulo(): AbstractControl | null {
    return this.form.get("titulo");
  }

  get pergunta(): AbstractControl | null {
    return this.form.get("pergunta");
  }

  get texto(): AbstractControl | null {
    return this.form.get("texto");
  }


  get dataAnotacao(): AbstractControl | null {
    return this.form.get("dataAnotacao");
  }

  get userEmail() {
    return this.form.get("userEmail");
  }


  public async gravar(modal: TemplateRef<any>, anotacao?: Anotacao) {
    this.form.reset();

    this.configurarValoresPadrao();

    if (anotacao)
      this.form.setValue(anotacao);

    try {
      await this.modalService.open(modal).result;


      if (this.form.dirty && this.form.valid) {
        if (!anotacao)
          await this.anotacaoService.inserir(this.form.value)

        else
          await this.anotacaoService.editar(this.form.value);

        this.toastrService.success(`A anotacao foi salva com sucesso`,"Cadastro de Anotação");
    }
        else
        this.toastrService.error("Verifique o preenchimento do formulário e tente novamente.", "Cadastro de Anotação")

    } catch (error) {
      if (error != "fechar" && error != "0" && error != "1")
        this.toastrService.error("Houve um erro ao salvar o departamento. Tente novamente.", "Cadastro de Anotação")
    }

  }


  public excluir(anotacao: Anotacao) {
    this.anotacaoService.excluir(anotacao);
  }

  private configurarValoresPadrao(): void {
    this.form.get("userEmail")?.setValue(this.usuarioLogado.email);
  }

}

