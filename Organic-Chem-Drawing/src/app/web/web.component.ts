import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  
  //liste = '';

  element: Element;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<Element>('http://localhost:8080/organics/1').subscribe(r => this.element = r);
  }


  /*
  showReturn(r) {
    this.liste = JSON.stringify(r);
  }
  */

}
