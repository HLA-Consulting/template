import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Enfant } from './Enfant.modele';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GestionEnfant {
  private listeEnfant=[];

  constructor(private http: HttpClient, private router:Router) {}


  creerEnfant(
    nomEnfant:string,
    prenomEnfant:string,
    photoEnfant:string,
    datedenaissanceEnfant:string,
    datedinscription:string,
    classeEnfant:string,
    télEnfant:string

  ): Observable<Object> {
    const infoEnfant = {
      nom: nomEnfant,
      prénom: prenomEnfant,
      photo: photoEnfant,
      date_naissanceEnfant: datedenaissanceEnfant,
      date_inscription: datedinscription,
      classe: classeEnfant
      }
    return this.http
      .post('http://localhost:8080/create', infoEnfant);
  }



      getListeEnfant() {
        return this.listeEnfant;
      }

      listerEnfant(){
        this.listeEnfant = [];
        return this.http
        .get<Enfant[]>('http://localhost:8080/enfants').toPromise().then(
          data =>{
            for (let key of data) {
                var unit = {
                  'id': key.id,
                  'nom': key.nom,
                  'prenom': key.prenom,
                  'dateDeNaissance': key.dateDeNaissance,
                  'dateDinscription': key.dateDinscription,
                }
                this.listeEnfant.push(unit);
            }
            console.log(this.listeEnfant);
         }, error => console.log(error));
}


}
