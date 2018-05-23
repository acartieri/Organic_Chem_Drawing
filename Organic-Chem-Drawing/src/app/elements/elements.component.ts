import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  elements = [{ 'nom': 'Benzene' }, { 'nom': 'Cyclohexane' }, { 'nom': 'Cyclohexanone' }, { 'nom': 'Pyridine' }, { 'nom': 'Pyrrole' }];
  constructor() { }

  ngOnInit() {
  }

}
