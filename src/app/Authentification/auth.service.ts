import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient,} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  creerParent( infoParent: Object ): Observable<Object> {
    return  this.http
             .post('http://localhost:8090/api/creerUser', infoParent);
  }

  creerEmploye( infoEmploye: Object ): Observable<Object> {
    console.log(infoEmploye);
    return  this.http
             .post('http://localhost:8090/api/creerUser', infoEmploye);
  }
}
