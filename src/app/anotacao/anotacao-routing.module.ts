
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotacaoComponent } from './anotacao.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { AnotacaoResolver } from './services/anotacao.resolver';
import { AnotacaoUsuarioComponent } from './anotacao-usuario/anotacao-usuario.component';

const routes: Routes = [

{ path: "",
  component: AnotacaoComponent,
  children: [
    { path: "", redirectTo: "usuario", pathMatch:"full"},
    { path: "usuario", component: AnotacaoUsuarioComponent}
  ]
},
  { path: ":id", component: DetalhesComponent, resolve: { chamado: AnotacaoResolver } }

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotacaoRoutingModule { }
