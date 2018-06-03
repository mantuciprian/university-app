import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  connect: any;
  check: any;
  loginFunc: any;
  user: any;
  goHome: any;
  logout: any;
  constructor(private router: Router) { }

  handleNav(navFunction) {
    this.connect = navFunction;
  }

  handleCheck(checkFunc) {
    this.check = checkFunc;
  }

  connectComps(user) {
    this.connect(user);
  }

  getCheck() {
    this.check();
  }

  handleLoginPage(logFunc) {
     this.loginFunc = logFunc;
  }

  connectLoginToService(getUser) {
    this.loginFunc(getUser);
  }

  handleHome (func) {
      this.goHome = func;
  }

  checkHomeRoute(user) {
    if (user) {
      this.goHome();
    }
  }

  handleLogout(logout) {
     this.logout = logout;
  }


}
