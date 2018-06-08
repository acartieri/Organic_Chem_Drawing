import { Component, OnInit } from '@angular/core';
import { Element } from '../_models';
import { ActivatedRoute } from '@angular/router';
import { ElementsService } from '../_service/elements.service';

@Component({
  selector: 'app-elements-page',
  templateUrl: './elements-page.component.html',
  styleUrls: ['./elements-page.component.css']
})
export class ElementsPageComponent implements OnInit {

  element;
  param: number;

  constructor(private activatedRoute: ActivatedRoute, private elementsService: ElementsService) { }

  ngOnInit() {
    // A partir de l'URL, on veut récupérer l'id et afficher les infos de l'élément chimique
    this.activatedRoute.params.subscribe(p => this.loadElement(p['id']));
  }

  loadElement(id: string) {

    this.param = +id;
    this.elementsService.get(this.param).subscribe(r => this.element = r);
  }

}
