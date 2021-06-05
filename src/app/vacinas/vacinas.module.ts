import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacinasPageRoutingModule } from './vacinas-routing.module';

import { VacinasPage } from './vacinas.page';
import { HttpClientModule } from '@angular/common/http';
import { VacinasCadastroComponent } from './vacinas-cadastro/vacinas-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    VacinasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [VacinasPage, VacinasCadastroComponent]
})
export class VacinasPageModule {}
