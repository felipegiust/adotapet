import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from './pet.model';
import { Especies } from './especies.enum';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private url ='http://localhost:3000/pets';

  constructor(
    private httpClient: HttpClient
  ) { }

  getPets(): Observable<Pets[]> {
    return this.httpClient.get<Pets[]>(this.url);
  }

  excluir(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`)
  }

  getPet(id: number): Observable<Pets> {
    return this.httpClient.get<Pets>(`${this.url}/${id}`);
  }

  private adicionar(pets: Pets) {
    return this.httpClient.post(this.url, pets);
  }

  private atualizar(pets: Pets) {
    return this.httpClient.put(`${this.url}/${pets.id}`, pets);
  }

  salvar(pets: Pets) {
    if (pets.id) {
      return this.atualizar(pets);
    } else {
      return this.adicionar(pets);
    }
  }

}
