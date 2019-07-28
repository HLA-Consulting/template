import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { GestionEnfant } from '../gestion-enfant.service';
import { NgForm } from '@angular/forms';
import { EnfantFilter } from './listefilter';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class listeComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;
  public sub: any;
  finalTable : any;

  constructor(public gestionEnfantService: GestionEnfant) { }

  listeenfant = new EnfantFilter();
  enfantList = [
    {
        id: '1',
         nom: 'yousef',
         prenom:'ben dhafer',
         datenaissance:'14/07/1990',
         dateinscription:'13/06/2019'

    },
    {
      id: '2',
      nom: 'Alaa',
      prenom:'mahmoud',
      datenaissance:'15/08/1994',
      dateinscription:'14/06/2019'
    },
    {
      id: '3',
      nom: 'Ali',
      prenom:'belgacem',
      datenaissance:'15/07/1993',
      dateinscription:'15/06/2019'
    },
];
  fct(form: NgForm ) {
    // var a=this.gestionEnfant.listeEnfant()


  }
  chercher(){
    //console.log('test', this.listeenfant.id);
    let filtredEnfant = this.enfantList.slice(0);
    if(this.listeenfant.id!== undefined && this.listeenfant.id !==''){
      filtredEnfant = filtredEnfant.filter((listenfant:any)=>{

        return listenfant.id.indexOf(this.listeenfant.id)!==-1;
      });

    }


    this.finalTable = filtredEnfant.slice(0);
    console.log('aaaa',this.finalTable);



  }





  ngOnInit() {
     //this.http.get("http://localhost:8081/enfants").subscribe((enfants:[])=>{
     //  this.enfantList= enfants;
     // console.log('aa',this.enfantList);
     // })
        this.currentRate = 8;
        this.sub = this.gestionEnfantService.listerEnfant();
        this.finalTable = this.gestionEnfantService.getListeEnfant();
    //this.finalTable = this.enfantList.slice(0);

  }

}

