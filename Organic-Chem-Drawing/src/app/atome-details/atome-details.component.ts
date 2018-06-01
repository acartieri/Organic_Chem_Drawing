import { Component, OnInit, Input } from '@angular/core';
import { Atome } from '../_models';

@Component({
  selector: 'app-atome-details',
  templateUrl: './atome-details.component.html',
  styleUrls: ['./atome-details.component.css']
})
export class AtomeDetailsComponent implements OnInit {


  @Input() atome: Atome;

  constructor() { }

  ngOnInit() {
  }

}
