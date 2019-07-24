import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Enfant } from './Enfant.modele';

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
    télEnfant:string,
    sexeEnfant:string,
    NuméroEnfant:string,
    problémesEnfant:string,
    prendilEnfant:string,
    AdresseEnfant:string,
    aideznousEnfant:string,





  ) {
      const infoEnfant= {
        nomEnfant: nomEnfant,
        prenomEnfant: prenomEnfant,
        photoEnfant:photoEnfant,
        datedenaissanceEnfant:datedenaissanceEnfant,
        datedinscription:datedinscription,
        classeEnfant:classeEnfant,
        télEnfant:télEnfant,
        sexeEnfant:sexeEnfant,
        NuméroEnfant:NuméroEnfant,
        problémesEnfant: problémesEnfant,
        prendilEnfant:prendilEnfant,
        AdresseEnfant:AdresseEnfant,
        aideznousEnfant:aideznousEnfant,





        }
        this.http
        .put('http://localhost:4200/CreerEnfant', infoEnfant);

      }


      getListeEnfant() {
        return this.listeEnfant;
      }

      listerEnfant(){
        this.listeEnfant = [];
        return this.http
        .get<Enfant[]>('http://localhost:8090/api/absences').toPromise().then(
          data =>{
            for (let key of data) {
                var unit = {
                  'id': key.id,
                  'nom': key.nom,
                  'prenom': key.prenom,
                  'dateDeNaissance': key.dateDeNaissance,
                  'dateDinscription':key.dateDinscription,
                }
                this.listeEnfant.push(unit);
            }
         }, error => console.log(error));
}


}
