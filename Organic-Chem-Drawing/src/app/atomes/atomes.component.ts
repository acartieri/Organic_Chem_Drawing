import { Component, OnInit, Input } from '@angular/core';
import { Atome } from '../_models';
import { ActivatedRoute } from '@angular/router';
import { AtomesService } from '../_service/atomes.service';



@Component({
  selector: 'app-atomes',
  templateUrl: './atomes.component.html',
  styleUrls: ['./atomes.component.css']
})
export class AtomesComponent implements OnInit {

  constructor(private acivatedRoute: ActivatedRoute, private atomesService: AtomesService) { }

 atome = new Atome();

selectedAtome: Atome;

tab;

  ngOnInit() {
    this.tab = this.atomesService.getAtomes();
  }

  onSelected(a: Atome): void {
    this.selectedAtome = a;
  }


}

//TODO @Input -> numero atomique
// recuperer l'atome a partir du num
// (click) qui change le css