import { Component, OnInit, Input } from '@angular/core';
import { Element } from '../_models';
import { element } from 'protractor';

@Component({
  selector: 'app-element-detail',
  templateUrl: './element-detail.component.html',
  styleUrls: ['./element-detail.component.css']
})
export class ElementDetailComponent implements OnInit {


  @Input() element: Element;


  constructor() { }

  ngOnInit() {
  }

}
