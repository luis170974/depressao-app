
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotacaoComponent } from './anotacao.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { DiarioResolver } from './services/diario.resolver';

const routes: Routes = [

  { path: "",
  component: AnotacaoComponent,
  children: [
    { path: "", redirectTo: "diario", pathMatch:"full"}
]
},
  { path: ":id", component: DetalhesComponent, resolve: { chamado: DiarioResolver } }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotacaoRoutingModule { }
