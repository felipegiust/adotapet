import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacinasCadastroComponent } from './vacinas-cadastro/vacinas-cadastro.component';
import { VacinasPage } from './vacinas.page';


const routes: Routes = [
  {
    path: '',
    component: VacinasPage
  },
  {
    path: 'cadastro',
    component: VacinasCadastroComponent
  },
  {
    path: 'edicao/:id',
    component: VacinasCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacinasPageRoutingModule {}
