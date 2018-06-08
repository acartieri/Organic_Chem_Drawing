import { Injectable } from '@angular/core';
import { Atome } from '../_models';
import { data } from '../_models';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class AtomesService {

  table = 'atomes';


  constructor(private ws: WebService) {

  }

  getAll() {
    return this.ws.getAll<Atome[]>(this.table);
  }




}
