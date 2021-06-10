import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Especies } from './especies.enum';
import { Pets } from './pet.model';
import { PetsService } from './pet.service';
import { Sexo } from './sexo.enum';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
})
export class PetsPage implements OnInit {
  pets: Pets[];

  especies = Especies
  sexos = Sexo

  constructor(
    private alertController: AlertController,
    private petsService: PetsService,
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
    this.petsService.getPets().subscribe(
      (dados)=>{
        this.pets=dados;
      },
    (erro)=>{
      console.error(erro);
    });
  }
  
  confirmarExclusao(pets: Pets) {
    this.alertController.create({
      header: 'Confirmação de exclusão', 
      message: `Deseja excluir o Pet ${pets.nome}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.excluir(pets)
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());
  }

  private excluir(pets: Pets) {
    this.petsService.excluir(pets.id).subscribe(
      ()=>{
        this.listar();
      },
      (erro)=>{
        this.toastController.create({
          message:`Não foi possivel Excluir o Pet ${pets.nome}`,
          color:'danger',
          duration: 5000,
          keyboardClose: true,
        }).then(t => t.present());
      }
    );
    
  }



}
