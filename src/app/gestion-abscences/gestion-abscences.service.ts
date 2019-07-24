import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { absence } from './afficher-absence/absence.model';

@Injectable({providedIn: 'root'})
export class GestionAbscencesService {

  constructor(private http: HttpClient, private router: Router) {}
  private absences = [];

  goAbsence() {
    this.router.navigate(['/dashboard']);
  }

  saisirAbscence(
    enfant: Object,
    prenomEnfant: string,
    nomEnfant: string
    ): Observable<Object> {
        const queryParams = `?nom_enfant=${nomEnfant}&prenom_enfant=${prenomEnfant}`;
        return  this.http
          .post('http://localhost:8090/api/absence/create' + queryParams, enfant);
  }

  getAbs() {
    return this.absences;
  }

  listerAbsence(){
    this.absences = [];
    return this.http
    .get<absence[]>('http://localhost:8090/api/absences').toPromise().then(
      data =>{
        for (let key of data) {
            var unit = {
              'id': key.id,
              'nom': key.enfant.nom,
              'prenom': key.enfant.prenom,
              'dateAbs': Date.parse(key.dateAbsence.toString()),
              'dateRep': Date.parse(key.dateReprise.toString()),
              'raison': key.raison,
              'comment': key.commentaire
            }
            this.absences.push(unit);
        }
     }, error => console.log(error));
  }
}
//{ enfant: Object, editeur: Object, dateAbsence: Date, dateReprise: Date, raison: string, commentaire: string }
