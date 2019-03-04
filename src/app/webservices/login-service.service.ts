import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {Urls} from './Urls';
import {LoginBody} from '../login/LoginBody';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  doLogin(loginBody: LoginBody): Observable<any> {
    return this.httpClient.post<any>(Urls.baseUrls + Urls.login, JSON.stringify(loginBody), this.httpOptions);
  }


}
