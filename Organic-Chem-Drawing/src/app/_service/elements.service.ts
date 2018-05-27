import { Injectable } from '@angular/core';
import { Element } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  elements = [new Element('Benzene', 'C6H6', 'Benzene-Kekule-2D-skeletal.png', '71-43-2', 78.11,
  'liquide', 0.879, 5.5, 80.1, -11, 555, 'Benzene.png'),
  new Element('Cyclohexane', 'C6H12', '422px-Cyclohexane-2D-skeletal.png', '110-82-7', 84.16, 'liquide',
  0.779, 6.5, 80.7, -20, 250, 'Cyclohexane.png'),
  new Element('Cyclohexanone', 'C6H10O', 'Cyclohexanone-2D-skeletal.png', '108-94-1' , 98.14,
  'liquide', 0.946, -30, 154, 43, 420, 'cyclohexanone.PNG'),
  new Element('Pyridine', 'C5H5N', 'Pyridine_structure.png', '110-86-1' , 79.10,
  'liquide', 0.983, -42, 115.2, 20, 482, 'pyridine.PNG'),
  new Element('Pyrrole', 'C4H5N', 'Pyrrole_structure.png', '109-97-7' , 67.09,
   'liquide', 0.970, -24, 130, 39, 550, 'pyrrole.PNG')];

  constructor() { }

  getElements() {

    return this.elements;
  }

  getElementById(id: number): Element {
    return this.elements.filter(a => a.id === id)[0];
  }
}
