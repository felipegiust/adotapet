import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Vacina } from '../vacina.model';
import { VacinasService } from '../vacinas.service';

@Component({
  selector: 'app-vacinas-cadastro',
  templateUrl: './vacinas-cadastro.component.html',
  styleUrls: ['./vacinas-cadastro.component.scss'],
})
export class VacinasCadastroComponent implements OnInit {

  vacinaId: number;
  vacinasForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private vacinasService: VacinasService,
    private router: Router,
  ) {
    let vacina = {
      id: null,
      nome: '',
      qtdDoses: 1
    };
    this.initializaFormulario(vacina);
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.vacinaId = id;
      this.vacinasService
        .getVacina(id)
        .subscribe((vacina) => {
          this.initializaFormulario(vacina);
        });
    }
  }

  initializaFormulario(vacina: Vacina) {
    this.vacinasForm = new FormGroup({
      nome: new FormControl(vacina.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      qtdDoses: new FormControl(vacina.qtdDoses, [
        Validators.required, 
        Validators.min(1)
      ]),
    })
  }

  salvar() {
    const vacina = { ...this.vacinasForm.value, id: this.vacinaId }
    this.vacinasService.salvar(vacina).subscribe(
      () => this.router.navigate(['vacinas']),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o vacina ${vacina.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );

  }

  get nome() {
    return this.vacinasForm.get('nome');
  }

  get qtdDoses() {
    return this.vacinasForm.get('qtdDoses');
  }

}
