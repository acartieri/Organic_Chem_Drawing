import { Injectable } from '@angular/core';
import { Element } from '../_models';
import { WebService } from './web.service';


@Injectable({
  providedIn: 'root'
})
export class ElementsService {

table = 'organics';


  constructor(private ws: WebService) { }

  getAll() {
    return this.ws.getAll<Element[]>(this.table);
  }

  get(id: number) {
    return this.ws.get<Element>(this.table, id);
  }


  /*
  elements = [new Element('Acétone', 'C3H6O',  'Acetone-2D-skeletal.png', '67-64-1', 58.08,
  'liquide', 0.783, -94.6, 56.1, -18, 538, 'Acétone.PNG'),
    new Element('Benzene', 'C6H6',  'Benzene-Kekule-2D-skeletal.png', '71-43-2', 78.11,
  'liquide', 0.879, 5.5, 80.1, -11, 555, 'Benzene.png'),
  new Element('Cyclohexane', 'C6H12',   '422px-Cyclohexane-2D-skeletal.png', '110-82-7', 84.16, 'liquide',
  0.779, 6.5, 80.7, -20, 250, 'Cyclohexane.png'),
  new Element('Cyclohexanone', 'C6H10O',  'Cyclohexanone-2D-skeletal.png', '108-94-1' , 98.14,
  'liquide', 0.946, -30, 154, 43, 420, 'cyclohexanone.PNG'),
  new Element('Heptane', 'C7H16',  '1280px-Heptane-2D-Skeletal.svg.png', '142-82-5', 100.2, 'liquide',
  0.68, -90.6, 98.4, -4, 215, 'Heptane.PNG'),
  new Element('Hexane', 'C6H14', 'Hexane-2D-skeletal.png', '110-54-3', 86.17, 'liquide',
  0.660, -94.3, 68.7, -24, 225, 'Hexane.PNG'),
  new Element('Pyridine', 'C5H5N',   'Pyridine_structure.png', '110-86-1' , 79.10,
  'liquide', 0.983, -42, 115.2, 20, 482, 'pyridine.PNG'),
  new Element('Pyrrole', 'C4H5N', 'Pyrrole_structure.png', '109-97-7' , 67.09,
   'liquide', 0.970, -24, 130, 39, 550, 'pyrrole.PNG'),
   new Element('Tétrachlorométhane', 'CCl4',  'CCl4.png', '56-23-5' , 153.82,
   'liquide', 1.59, -23, 76.8, 'Non inflammable ', 'non inflammable ', 'CCl4fiche.PNG')];
   */
}
