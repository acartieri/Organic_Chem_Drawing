import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  etudiant = { 'nom': 'Daniel', 'age': 25, 'saved': false };
  etudiants = [{ 'nom': 'Daniel' }, { 'nom': 'Michalo' }, { 'nom': 'Montargie' }, { 'nom': 'Petitbeurre' }];
  constructor() { }

  ngOnInit() {
  }
  getEtudiant(): void {
    this.etudiant.nom = 'default';
  }

  saveEtudiant() {
    this.etudiant.saved = true;
  }
}
