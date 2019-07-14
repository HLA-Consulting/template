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
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-forms',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;

  constructor(public authService: AuthService) { }

  creerParent(form: NgForm) {
    const infoParent = {
      nomParent: form.value.nom,
      prenomParent: form.value.prenom,
      numTel: form.value.numTel,
      email: form.value.email,
      password: form.value.password,
      cin: form.value.cin,
      nbrEnfant: form.value.nbrEnfant,
      role: 'parent'
    };
    this.authService
    .creerParent( infoParent )
      .subscribe(data => console.log(data), error => console.log(error));
  }

  creerEmploye(form: NgForm) {
    const infoParent = {
      nomEmploye: form.value.nom,
      prenomEmploye: form.value.prenom,
      cin: form.value.cin,
      email: form.value.email,
      password: form.value.password,
      numTel: form.value.numTel,
      salaire: form.value.salaire,
      role: 'employe'
    };
    this.authService
    .creerParent( infoParent )
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
    this.currentRate = 8;
  }

}
