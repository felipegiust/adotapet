import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Vacina } from './vacina.model';
import { VacinasService } from './vacinas.service';

@Component({
  selector: 'app-pets',
  templateUrl: './vacinas.page.html',
  styleUrls: ['./vacinas.page.scss'],
})
export class VacinasPage implements OnInit {
  vacinas: Vacina[];

  constructor(
    private alertController: AlertController,
    private vacinasService: VacinasService,
    private toastController: ToastController,
  ) { }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.listar();
  }
  
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnInit() {
  }

  listar() {
    this.vacinasService.getVacinas().subscribe(
      (dados)=>{
        this.vacinas = dados;
      },
    (erro)=>{
      console.error(erro);
    });
  }
  
  confirmarExclusao(vacina: Vacina) {
    this.alertController.create({
      header: 'Confirmação de exclusão', 
      message: `Deseja excluir a vacina ${vacina.nome}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.excluir(vacina)
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());
  }

  private excluir(vacina: Vacina) {
    this.vacinasService.excluir(vacina.id).subscribe(
      ()=>{
        this.listar();
      },
      (erro)=>{
        this.toastController.create({
          message:`Não foi possivel Excluir a vacina ${vacina.nome}`,
          color:'danger',
          duration: 5000,
          keyboardClose: true,
        }).then(t => t.present());
      }
    );
    
  }


}