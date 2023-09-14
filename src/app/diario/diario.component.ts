import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { Anotacao } from './models/diario-anotacoes.model';
import { DiarioService } from './services/diario.service';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
})
export class DiarioComponent {
  public usuarioLogado: Observable<firebase.User | null>;
  public anotacoes$: Observable<Anotacao[]>;
  public form: FormGroup;

  private processoAutenticado$: Subscription;

  constructor(
    private authService: AuthenticationService,
    private diarioService: DiarioService,
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.anotacoes$ = this.diarioService.selecionarTodos();

    this.form = this.fb.group({
      id: new FormControl(""),
      titulo: new FormControl(""),
      texto: new FormControl(""),
      dataAnotacao: new FormControl("")
    });



    this.processoAutenticado$ = this.authService.usuarioLogado.subscribe(usuario => {
      const email: string = usuario?.email!;

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


  get texto(): AbstractControl | null {
    return this.form.get("texto");
  }


  get dataAnotacao(): AbstractControl | null {
    return this.form.get("dataAnotacao");
  }

  public async gravar(modal: TemplateRef<any>, anotacao?: Anotacao) {
    this.form.reset();


    if (anotacao)
      this.form.setValue(anotacao);

    try {
      await this.modalService.open(modal).result;

      if (this.form.dirty && this.form.valid) {
        if (!anotacao)
          await this.diarioService.inserir(this.form.value)
        else
          await this.diarioService.editar(this.form.value);

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
    this.diarioService.excluir(anotacao);
  }


}

