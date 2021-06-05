import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from './vacina.model';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {

  private url = 'http://localhost:3000/vacinas';

  constructor(
    private httpClient: HttpClient
  ) { }

  getVacinas(): Observable<Vacina[]> {
    return this.httpClient.get<Vacina[]>(this.url);
  }

  excluir(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`)
  }

  getVacina(id: number): Observable<Vacina> {
    return this.httpClient.get<Vacina>(`${this.url}/${id}`);
  }

  private adicionar(vacinas: Vacina) {
    return this.httpClient.post(this.url, vacinas);
  }

  private atualizar(vacinas: Vacina) {
    return this.httpClient.put(`${this.url}/${vacinas.id}`, vacinas);
  }

  salvar(vacinas: Vacina) {
    if (vacinas.id) {
      return this.atualizar(vacinas);
    } else {
      return this.adicionar(vacinas);
    }
  }

}
