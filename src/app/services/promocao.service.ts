import { Injectable } from '@angular/core';
import { Promocao } from './Promocao';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private nameItemStorage = 'promocoes';

  constructor() { }

  add(form: Promocao) {
    const aux = this.getAll() || [];
    aux.push(form);
    localStorage.setItem(this.nameItemStorage, JSON.stringify(aux));
  }

  getAll(): Promocao[] {
    const json = localStorage.getItem(this.nameItemStorage);
    if (json) {
      return JSON.parse(json);
    }
  }

}
