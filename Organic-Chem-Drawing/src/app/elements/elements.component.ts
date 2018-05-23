import { Component, OnInit } from '@angular/core';
import { Element } from '../_models';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  /*elements = [{ 'nom': 'Benzene', 'formule': 'C6H6' },
  { 'nom': 'Cyclohexane', 'formule': 'C6H12' },
  { 'nom': 'Cyclohexanone', 'formule': 'C6H10O' },
  { 'nom': 'Pyridine', 'formule': 'C5H5N' },
  { 'nom': 'Pyrrole', 'formule': 'C4H5N' }];*/

  edit = false;

  elements = [new Element('Benzene', 'C6H6'),
  new Element('Cyclohexane', 'C6H12'),
  new Element('Cyclohexanone', 'C6H10O'),
  new Element('Pyridine', 'C5H5N'),
  new Element('Pyrrole', 'C4H5N')];

  element = new Element();

  constructor() { }

  ngOnInit() {
  }

  addElement() {
    this.elements.push(this.element);
    this.element = new Element();
  }

  editElement(id: number) {
    //console.log(id);
    this.element = this.getElementById(id);
    this.edit = true;
  }

  getElementById(id: number): Element {
/*
    for (let i = 0; i < this.elements.length; i++) {

      if (this.elements[i].id === id) {
        return this.elements[i];
      }

    }
    */

   return this.elements.filter(a => a.id === id)[0];
  }

  editOver() {
    this.edit = false;
    this.element = new Element;
  }

}
