
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';
import { PainelComponent } from './painel/painel.component';
import { CadastroComponent } from './auth/cadastro/cadastro.component';


const routes: Routes = [
  { path: "" , redirectTo: "login", pathMatch:"full" },
  { path: "login", component: LoginComponent  },
  { path: "cadastro", component: CadastroComponent},
  { path: "painel", component: PainelComponent, canActivate: [AuthGuard] },

  {
    path: "anotacoes",
    loadChildren: () => import("./anotacao/anotacao.module")
      .then(m => m.AnotacaoModule),
    canActivate: [AuthGuard]
  },

  {
    path: "ajuda",
    loadChildren: () => import("./ajuda/ajuda.module")
      .then(m => m.AjudaModule),
    canActivate: [AuthGuard]
  },

  {
    path: "medicos",
    loadChildren: () => import("./medicos/medicos.module")
      .then(m => m.MedicosModule),
    canActivate: [AuthGuard]
  },



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
