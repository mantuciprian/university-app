import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable } from 'rxjs';
import { RequestMethod } from '@angular/http/src/enums';
import { NavbarService } from 'src/app/services/navbar/navbar.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  message = 'resolver works';
  user = undefined;
  constructor(private _http: HttpClient, private navbar: NavbarService) { }
  getMessage() {
    return this.message;
  }
  loginUser (user) {
    console.log('Attepting to login user : ' + user.userName);
    const headers = new HttpHeaders();
    const options = {headers: headers};
    headers.append('Content-Type', 'application/json');
    return this._http.put('http://localhost:3000/users/userData', user, {headers: headers})
    .subscribe((response) => {
      this.user = response;
      this.navbar.connectLoginToService(response);
      this.navbar.connectComps(response);
      this.navbar.checkHomeRoute(response);
      return response;
    });
  }

  getUser() {
    return this.user;
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    if (err) {
      throw err;
    }
   }

}
