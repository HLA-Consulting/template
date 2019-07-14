import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GestionAbscencesService {

  constructor(private http: HttpClient, private router: Router) {}

  saisirAbscence(
    enfant: Object,
    prenomEnfant: string,
    nomEnfant: string
    ): Observable<Object> {
        const queryParams = `?nom_enfant=${nomEnfant}&prenom_enfant=${prenomEnfant}`;
        return  this.http
          .post('http://localhost:8090/api/absence/create' + queryParams, enfant);
  }

  listerAbsence(): Observable<Object> {
    return this.http.get('http://localhost:8090/api/absences')
  }
}
