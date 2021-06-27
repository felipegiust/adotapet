import { Component, OnInit } from '@angular/core';
import { Pets } from 'src/app/pets/pet.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AdoteService } from '../adote.service';
import { PetsService } from 'src/app/pets/pet.service';
import { Adote } from '../adote.model';

@Component({
  selector: 'app-adocao-cadastro',
  templateUrl: './adocao-cadastro.component.html',
  styleUrls: ['./adocao-cadastro.component.scss'],
})
export class AdocaoCadastroComponent implements OnInit {

  pets: Pets[] = []

  adoteId: number;
  adocaoForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private adoteService: AdoteService,
    private petsService: PetsService,
    private router: Router,
  ) { 
    let adote = {
      id: null,
      pets: null,
      nome: '',
      telefone: null,
      cidade: '',
      email:''
    };
    this.initializaFormulario(adote);
    this.carregaPets()
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.adoteId = id;
      this.adoteService
        .getAdote(id)
        .subscribe((adote) => {
          this.initializaFormulario(adote);
        }, erro => {
console.error(erro);
          this.toastController.create({
            message: `Não foi possivel resgatar Adoção`,
            duration: 5000,
            keyboardClose: true,
            color: 'danger'
          }).then(t => t.present());
        });
    }
  }

  compareWithPets = (a1, a2) => a1.id === a2.id

  initializaFormulario(adote: Adote) {
    this.adocaoForm = new FormGroup({
      nome: new FormControl(adote.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      telefone: new FormControl(adote.telefone, [
        Validators.required
      ]),
      cidade: new FormControl(adote.cidade, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      email: new FormControl(adote.email, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      pets: new FormControl(adote.pets, Validators.required)
    })
  }

  carregaPets() {
    this.petsService.getPets().subscribe(pets => {
      this.pets = pets
    }, erro => {
      console.error(erro);
      this.toastController.create({
        message: `Não foi possível listar os Pets`,
        duration: 5000,
        keyboardClose: true,
        color: 'danger'
      }).then(t => t.present());
    })
  }

  salvar() {
    const adote = { ...this.adocaoForm.value, id: this.adoteId }
    this.adoteService.salvar(adote).subscribe(
      () => this.router.navigate(['adocao']),
      (response) => {
        this.toastController.create({
          message: response.error.message || `Não foi possível salvar o Adoção ${adote.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );
  }

  get nome() {
    return this.adocaoForm.get('nome');
  }

  get telefone() {
    return this.adocaoForm.get('telefone');
  }

  get cidade() {
    return this.adocaoForm.get('cidade');
  }

  get email() {
    return this.adocaoForm.get('email');
  }

  get pet() {
    return this.adocaoForm.get('pets');
  }
}
