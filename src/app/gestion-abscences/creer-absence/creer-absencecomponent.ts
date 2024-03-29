import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import { NgForm } from '@angular/forms';
import { GestionAbscencesService } from '../gestion-abscences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './creer-absence.component.html',
  styleUrls: ['./creer-absence.component.scss']
})
export class CreerAbsenceComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;

  constructor(public gestionAbscencesService: GestionAbscencesService, private router: Router) { }

  onSubmit(form: NgForm) {
    const infoAbsence = {
      dateAbsence: form.value.dateDebutAbs,
      dateReprise: form.value.dateRepriseAbs,
      raison: form.value.raisonAbs,
      commentaire: form.value.commentaire };
    this.gestionAbscencesService
    .saisirAbscence(
      infoAbsence,
      form.value.prenomEnfant,
      form.value.nomEnfant,
      )
      .subscribe(data => {console.log(data);}, error => console.log(error));
      //this.router.navigate(['afficherAbsence']);
      this.gestionAbscencesService.goAbsence();
      //location.reload();
  }

  /*search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length > 1 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  focusSearch = (text$: Observable<string>) =>
    text$
      .debounceTime(200).distinctUntilChanged()
      .merge(this.focus$)
      .merge(this.click$.filter(() => !this.instance.isPopupOpen()))
      .map(term => (term === '' ? states : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10));*/


  ngOnInit() {
    this.currentRate = 8;
  }

}
