import { Component, OnInit } from '@angular/core';
import { Atome } from '../_models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atomes',
  templateUrl: './atomes.component.html',
  styleUrls: ['./atomes.component.css']
})
export class AtomesComponent implements OnInit {

  constructor(private acivatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
