import { Component, OnInit } from '@angular/core';
import { Element } from '../_models';
import { ActivatedRoute } from '@angular/router';
import { ElementsService } from '../_service/elements.service';
import { NONAME } from 'dns';


@Component({
  selector: 'app-casnumber',
  templateUrl: './casnumber.component.html',
  styleUrls: ['./casnumber.component.css']
})
export class CasnumberComponent implements OnInit {

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

  this.resultList = this.elements.filter(e => e.cas.toUpperCase().indexOf(this.wordToSearch.toUpperCase())
  !== -1);
}

  }

}
