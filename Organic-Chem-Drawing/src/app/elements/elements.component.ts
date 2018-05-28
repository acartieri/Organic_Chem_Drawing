import { Component, OnInit } from '@angular/core';
import { Element } from '../_models';
import { ActivatedRoute } from '@angular/router';
import { ElementsService } from '../_service/elements.service';

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

  /*
    elements = [new Element('Benzene', 'C6H6', 78.11, 'liquide', 0.879),
    new Element('Cyclohexane', 'C6H12', 84.16, 'liquide', 0.779),
    new Element('Cyclohexanone', 'C6H10O', 98.14, 'liquide', 0.946),
    new Element('Pyridine', 'C5H5N', 79.10, 'liquide', 0.983),
    new Element('Pyrrole', 'C4H5N', 67.09, 'liquide', 0.970)];
    */
  elements;

  element = new Element();

  selectedElement: Element;

  constructor(private acivatedRoute: ActivatedRoute, private elementsService: ElementsService) { }

  onSelected(e: Element): void {
    this.selectedElement = e;
  }

  ngOnInit() {
    this.elements = this.elementsService.getElements();
  }

  addElement() {
    this.elements.push(this.element);
    this.element = new Element();
  }

  editElement(id: string) {

    this.element = this.elementsService.getElementById(+id);
    this.edit = true;
  }

  editOver() {
    this.edit = false;
    this.element = new Element;
  }

}
