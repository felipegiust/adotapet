import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Vacina } from 'src/app/vacinas/vacina.model';
import { VacinasService } from 'src/app/vacinas/vacinas.service';
import { Especies, EspeciesOptions } from '../especies.enum';
import { Pets } from '../pet.model';
import { PetsService } from '../pet.service';
import { Sexo } from '../sexo.enum';

@Component({
  selector: 'app-pets-cadastro',
  templateUrl: './pets-cadastro.component.html',
  styleUrls: ['./pets-cadastro.component.scss'],
})
export class PetsCadastroComponent implements OnInit {
  mesesAbreviados = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  vacinas: Vacina[] = [];

  petId: number;
  petsForm: FormGroup;

  especiesOptions = EspeciesOptions

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private petService: PetsService,
    private vacinasService: VacinasService,
    private router: Router,
  ) {
    let pet = {
      id: null,
      nome: '',
      dataNascimento: null,
      sexo: Sexo.MACHO,
      especie: Especies.CAES,
      imagem: '',
      vacinasAplicadas: []
    };
    this.initializaFormulario(pet);
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.petId = id;
      this.petService
        .getPet(id)
        .subscribe((pet) => {
          this.initializaFormulario(pet);
        });
    }
    this.getVacinas()
  }

  initializaFormulario(pet: Pets) {
    this.petsForm = new FormGroup({
      nome: new FormControl(pet.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      dataNascimento: new FormControl(pet.dataNascimento, [Validators.required]),
      sexo: new FormControl(pet.sexo, [Validators.required]),
      especie: new FormControl(pet.especie, [Validators.required]),
      imagem: new FormControl(pet.imagem),
      vacinasAplicadas: new FormControl(pet.vacinasAplicadas)
    })
  }

  getVacinas() {
    this.vacinasService.getVacinas().subscribe((vacinas) => {
      this.vacinas = vacinas
    })
  }

  compareWithVacinas = (a1, a2) => a1.id === a2.id

  salvar() {
    const pet = { ...this.petsForm.value, id: this.petId }
    console.log(pet)
    this.petService.salvar(pet).subscribe(
      () => this.router.navigate(['pets']),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o pet ${pet.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );

  }

  get nome() {
    return this.petsForm.get('nome');
  }


}
