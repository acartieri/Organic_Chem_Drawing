import { Component, OnInit } from '@angular/core';
import { Element } from '../_models';
import { ActivatedRoute } from '@angular/router';
import { ElementsService } from '../_service/elements.service';
import { NONAME } from 'dns';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  element = new Element();

  elements;

  resultList = [];

  wordToSearch: string;

  constructor(private acivatedRoute: ActivatedRoute, private elementsService: ElementsService) { }

  ngOnInit() {
    this.elements = this.elementsService.getElements();
  }

  searchElement() {

    if (this.wordToSearch === '') {
      this.resultList = null;

    } else {

      this.resultList = this.elements.filter(e => e.nom.toUpperCase().indexOf(this.wordToSearch.toUpperCase())
        !== -1);

    }
  }
}
