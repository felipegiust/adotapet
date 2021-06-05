import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdocaoPageRoutingModule } from './adocao-routing.module';

import { AdocaoPage } from './adocao.page';
import { HttpClientModule } from '@angular/common/http';
import { AdocaoCadastroComponent } from './adocao-cadastro/adocao-cadastro.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    AdocaoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AdocaoPage, AdocaoCadastroComponent]
})
export class AdocaoPageModule {}
