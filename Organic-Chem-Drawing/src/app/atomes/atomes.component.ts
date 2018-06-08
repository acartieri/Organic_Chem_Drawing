import { Component, OnInit, Input } from '@angular/core';
import { Atome } from '../_models';
import { Element } from '../_models';
import { ActivatedRoute } from '@angular/router';
import { AtomesService } from '../_service/atomes.service';
import { ElementsService } from '../_service/elements.service';



@Component({
  selector: 'app-atomes',
  templateUrl: './atomes.component.html',
  styleUrls: ['./atomes.component.css']
})
export class AtomesComponent implements OnInit {

  constructor(private acivatedRoute: ActivatedRoute, private atomesService: AtomesService,  private elementsService: ElementsService) { }

atome = new Atome();

element = new Element();

selectedAtome: Atome;

atomList = [];

ElementToSearch: Element;

elements;

tab = [];

  ngOnInit() {
    this.atomesService.getAll().subscribe(r => this.loadTable(r));
  }

  onSelected(a: Atome): void {

    this.selectedAtome = a;

    if (this.atomList.indexOf(a) === -1) {
    this.atomList.push(a);
    } else {
      this.atomList = this.atomList.filter(atome => atome !== a);
    }
  }


  loadTable(r)  {
    for (let i = 0; i < 20; i++) {
      console.log(i);
      this.tab[i] = [];
    }
      r.map(a => {
      const b = new Atome(a.nom, a.discovered_by, a.category,
         a.phase, a.masseAtomique, a.numeroAtomique,
        a.symbole);
      this.tab[a.ypos][a.xpos] = b;

    });
   }
}