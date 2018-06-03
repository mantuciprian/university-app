import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable } from 'rxjs';
import { RequestMethod } from '@angular/http/src/enums';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  resp: any;
  constructor(private _http: HttpClient, private router: Router) { }

  registerUser (userData) {
    console.log('Attepting to register user : ' + userData.userName);
    const headers = new HttpHeaders();
    const options = {headers: headers, responseType: 'text'};
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.put('http://localhost:3000/users/register',  userData, {headers: headers, responseType: 'text'})
    .subscribe((response) => {
      this.resp = response;
      console.log('regsterde ' + response);
      if (this.resp === userData.userName) {
        console.log('User ' + response + ' succesful registered!');
        this.router.navigate(['/login']);
      } else {
        console.log('User could not be registered!');
      }
      return response;
    });
  }

  isAvailable(userData) {
    console.log('Checking avability for user : ' + userData.userName);
    const headers = new HttpHeaders();
    const options = {headers: headers, responseType: 'text'};
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.put('http://localhost:3000/users/register/check',  userData, {headers: headers, responseType: 'text'})
    .subscribe((response) => {
      if (response === 'false') {
        console.log('User is already registered!');
      } else {
        console.log('User availabe');
        this.registerUser(userData);
      }
      return response;
    });
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    if (err) {
      throw err;
    }
   }


}
