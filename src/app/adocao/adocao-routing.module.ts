import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdocaoCadastroComponent } from './adocao-cadastro/adocao-cadastro.component';

import { AdocaoPage } from './adocao.page';

const routes: Routes = [
  {
    path: '',
    component: AdocaoPage
  },
  {
    path: 'cadastro',
    component: AdocaoCadastroComponent
  },
  {
    path: 'edicao/:id',
    component: AdocaoCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdocaoPageRoutingModule {}
