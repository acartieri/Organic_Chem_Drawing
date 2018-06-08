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
  elements = [];

  selectedElement: Element;

  constructor(private activatedRoute: ActivatedRoute, private elementsService: ElementsService) { }



  ngOnInit() {
    this.elementsService.getAll().subscribe(r => this.getElements(r));
    //this.elementsService.get(id).subscribe(a => this.getElementById(a));
    //this.activatedRoute.params.subscribe(a => this.elements = a['id']);

  }

  getElements(r: Element[]) {

  this.elements = r ;
  }

/*
  getElementById(a: Element[]) {
  this.elements = a ;
  }


  onSelected(e: Element): void {
    this.selectedElement = e;
  }

*/
/*
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
  */

}
