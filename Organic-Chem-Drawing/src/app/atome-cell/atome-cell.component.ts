import { Component, OnInit, Input} from '@angular/core';
import { Atome } from '../_models';



@Component({
  selector: 'app-atome-cell',
  templateUrl: './atome-cell.component.html',
  styleUrls: ['./atome-cell.component.css']
})
export class AtomeCellComponent implements OnInit {

  @Input() atome: Atome;

  select = false;




  constructor() {}


  //atomes = new Atome('Hydrogene', 'H', 1, 1.0079);

  ngOnInit() {

  }

}
