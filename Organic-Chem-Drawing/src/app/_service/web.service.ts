import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAll<T>(table: String) {

    return this.http.get<T>(this.url + table);

  }

  get<T>(table: String, id: number) {

    return this.http.get<T>(this.url + table + '/' + id);

  }
}
