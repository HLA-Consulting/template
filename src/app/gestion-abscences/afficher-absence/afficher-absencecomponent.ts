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
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-forms',
  templateUrl: './afficher-absence.component.html',
  styleUrls: ['./afficher-absence.component.scss'],
  providers: [ DatePipe ]
})
export class AfficherAbsenceComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;
  public listeAbsence: any;
  public curDate=new Date();


  constructor(public gestionAbscencesService: GestionAbscencesService, private datePipe: DatePipe) {}

  onSubmit(form: NgForm) {

    this.listeAbsence = this.gestionAbscencesService
    .listerAbsence()
      .subscribe(data => console.log(data), error => console.log(error));
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
    this.listeAbsence = this.gestionAbscencesService
    .listerAbsence()
      .subscribe(data => console.log(data), error => console.log(error));
    console.log(this.listeAbsence);
    var date3 = this.curDate;
    /*const name1 = 'yosri';
    const name2 = 'ramzi';
    const prenom1 = 'mimouna';
    const prenom2 = 'Oueslati';
    const date1 = new Date('2018-09-19');
    console.log(date1);
    const date2 = new Date('2018-09-21');
    const date4 = new Date('2019-09-21');
    this.listeAbsence = [
      {
        'nomEnfant': name1,
        'prenomEnfant': prenom1,
        'dateAbsence': date1,
        'dateReprise': date2,
      },
      {
        'nomEnfant': name2,
        'prenomEnfant': prenom2,
        'dateAbsence': date1,
        'dateReprise': date4
      }
    ];*/
    this.currentRate = 8;
  }

}
