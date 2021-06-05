import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsPageRoutingModule } from './pets-routing.module';

import { PetsPage } from './pets.page';
import { HttpClientModule } from '@angular/common/http';
import { PetsCadastroComponent } from './pets-cadastro/pets-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PetsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PetsPage, PetsCadastroComponent]
})
export class PetsPageModule {}
