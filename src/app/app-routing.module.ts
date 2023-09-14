
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';
import { PainelComponent } from './painel/painel.component';
import { CadastrarComponent } from './auth/cadastrar/cadastrar.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: "" , redirectTo: "login", pathMatch:"full" },
  { path: "login", component: LoginComponent  },
  { path: "cadastrar", component: CadastrarComponent  },
  { path: "navbar", component: NavbarComponent, canActivate: [AuthGuard]  },
  { path: "painel", component: PainelComponent, canActivate: [AuthGuard] },

  {
    path: "diario",
    loadChildren: () => import("./diario/diario.module")
      .then(m => m.DiarioModule),
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
