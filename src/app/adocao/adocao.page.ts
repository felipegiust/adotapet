import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { PetsService } from '../pets/pet.service';
import { Adote } from './adote.model';
import { AdoteService } from './adote.service';

@Component({
  selector: 'app-adocao',
  templateUrl: './adocao.page.html',
  styleUrls: ['./adocao.page.scss'],
})
export class AdocaoPage implements OnInit {
  adocao: Adote[];

  constructor(
    private alertController: AlertController,
    private petsService: PetsService,
    private adoteService: AdoteService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.listar();
  }

  listar() {
    this.adoteService.getAdocao().subscribe(
      (dados)=>{
        this.adocao = dados;
      },
    (erro)=>{
      console.error(erro);
    });
  }

  confirmarExclusao(adote: Adote) {

    this.alertController.create({
      header: 'Confirmação de exclusão', 
      message: `Deseja excluir o livro ${adote.nome}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.excluir(adote)
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());

    
  }

  excluir(adote: Adote) {
    this.adoteService.excluir(adote.id).subscribe(
      ()=>{
        this.listar();
      },
      (erro)=>{
        this.toastController.create({
          message:`Não foi possivel excluir o livro ${adote.nome}`,
          color:'danger',
          duration: 5000,
          keyboardClose: true,
        }).then(t => t.present());
      }
    );
  }


}
