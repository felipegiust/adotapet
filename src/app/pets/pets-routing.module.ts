import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsCadastroComponent } from './pets-cadastro/pets-cadastro.component';

import { PetsPage } from './pets.page';

const routes: Routes = [
  {
    path: '',
    component: PetsPage
  },
  {
    path: 'cadastro',
    component: PetsCadastroComponent
  },
  {
    path: 'edicao/:id',
    component: PetsCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsPageRoutingModule {}
