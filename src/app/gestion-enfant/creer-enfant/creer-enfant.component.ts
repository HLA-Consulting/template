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
  private gestionEnfant: GestionEnfant;
  private enfantsInscrits: any;

  fct(form: NgForm, form2: NgForm ) {
    this.enfantsInscrits = this.gestionEnfant.creerEnfant( form.value.nom, form.value.prenom, form.value.photo, form.value.datedenaissance , form.value.datedinscription, form.value.classe, form.value.tél, form2.value.Sexe, form.value.Numéro, form.value.problémes,form.value.prendil, form.value.Adresse,form.value.aideznous  );
    console.log(form2.value.sexe);
  }

  ngOnInit() {
    this.currentRate = 8;
  }
  
}
