import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import { GestionEnfant } from '../gestion-enfant.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './creer-enfant.component.html',
  styleUrls: ['./creer-enfant.component.scss']
})
export class CreerEnfantComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;
  private enfantsInscrits: any;

  constructor(private gestionEnfant: GestionEnfant) {}

  submitForm(form: NgForm) {
    this.enfantsInscrits = this.gestionEnfant.creerEnfant(
      form.value.nom,
      form.value.prenom,
      form.value.photo,
      form.value.datedenaissance,
      form.value.datedinscription,
      form.value.classe,
      form.value.tél )
      .subscribe(data => console.log(data), error => console.log(error));

    console.log(form.value.nom);
  }

  ngOnInit() {
    this.currentRate = 8;
  }

}
