import { Component, OnInit } from '@angular/core';
import { Element } from '../_models';
import { ActivatedRoute } from '@angular/router';
import { ElementsService } from '../_service/elements.service';
import { NONAME } from 'dns';

@Component({
  selector: 'app-formule',
  templateUrl: './formule.component.html',
  styleUrls: ['./formule.component.css']
})
export class FormuleComponent implements OnInit {


  element = new Element();

  elements;

  resultList = [];

  wordToSearch: string;

  constructor(private acivatedRoute: ActivatedRoute, private elementsService: ElementsService) { }

  ngOnInit() {
    this.elementsService.getAll().subscribe(r => this.getElements(r));
  }

  getElements(r: Element[]) {

    this.elements = r ;
    }

  searchElement() {

    if (this.wordToSearch === '') {
      this.resultList = null;

    } else {

  this.resultList = this.elements.filter(e => e.formule.toUpperCase().indexOf(this.wordToSearch.toUpperCase())
  !== -1);
}

}
}
