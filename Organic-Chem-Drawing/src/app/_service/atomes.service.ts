import { Injectable } from '@angular/core';
import { Atome } from '../_models';
import { data } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class AtomesService {
  atomes = [];
  d = data;

  /*
  atomes = [[new Atome('H', 1, 1.008), null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, null,
  new Atome('He', 2, 4)],
  [new Atome('Li', 3, 6.94),
  new Atome('Be', 4, 9.01),  null, null, null, null, null, null, null, null, null, null,
  new Atome( 'B', 5, 10.811),
  new Atome('C', 6, 12.011),
  new Atome('N', 7, 14.007),
  new Atome('O', 8, 15.999),
  new Atome('F', 9, 19),
  new Atome('Ne', 10, 20.18),
  ],
  [new Atome('Na', 11, 22.99),
  new Atome('Mg', 12, 24.31),  null, null, null, null, null, null, null, null, null, null,
  new Atome('Al', 13, 26.98),
  new Atome('Si', 14, 28.09),
  new Atome( 'P', 15, 30.97),
  new Atome('S', 16, 32.06),
  new Atome('Cl', 17, 35.45),
  new Atome('Ar', 18, 39.95),
  ],
  [new Atome('K', 19, 39.10),
  new Atome('Ca', 20, 40.08),
  new Atome('Sc', 21, 44.96),
  new Atome('Ti', 22, 47.87),
  new Atome('V', 23, 50.94),
  new Atome('Cr', 24, 52),
  new Atome('Mn', 25, 54.94),
  new Atome('Fe', 26, 55.85),
  new Atome('Co', 27, 58.93),
  new Atome('Ni', 28, 58.69),
  new Atome('Cu', 29, 63.55),
  new Atome('Zn', 30, 65.38),
  new Atome('Ga', 31, 69.72),
  new Atome('Ge', 32, 72.63),
  new Atome('As', 33, 74.92),
  new Atome('Se', 34, 78.96),
  new Atome('Br', 35, 79.90),
  new Atome('Kr', 36, 83.80),
  ]];
  */

  constructor() {

    for (let i = 0; i < 20; i++) {
      console.log(i);
      this.atomes[i] = [];
    }
    this.d.map(a => {
      console.log(a);
      const b = new Atome(a.name, a.discovered_by, a.category,
        a.appearance, a.phase , a.melt, a.boil, a.summary, a.spectral_img, a.atomic_mass, a.number,
        a.symbol);
      this.atomes[a.ypos][a.xpos] = b;

    });
  }

  getAtomes() {

    return this.atomes;
  }
}
