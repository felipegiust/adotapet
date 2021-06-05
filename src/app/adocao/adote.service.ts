import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adote } from './adote.model';

@Injectable({
  providedIn: 'root'
})
export class AdoteService {

  private url ='http://localhost:3000/adocao';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAdocao(): Observable<Adote[]> {
    return this.httpClient.get<Adote[]>(this.url);
  }

  excluir(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`)
  }

  getAdote(id: number): Observable<Adote> {
    return this.httpClient.get<Adote>(`${this.url}/${id}`);
  }

  private adicionar(adote: Adote) {
    return this.httpClient.post(this.url, adote);
  }

  private atualizar(adote: Adote) {
    return this.httpClient.put(`${this.url}/${adote.id}`, adote);
  }

  salvar(adote: Adote) {
    if (adote.id) {
      return this.atualizar(adote);
    } else {
      return this.adicionar(adote);
    }
  }

}
