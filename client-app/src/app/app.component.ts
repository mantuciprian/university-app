import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  userLogged;
  showMe = false;
  
  constructor(private login: LoginService, private navbar: NavbarService, private router: Router) { }
  ngOnInit() {
        this.userLogged = this.login.user;
        console.log('user form app comp' + this.userLogged);
        this.navbar.handleNav(this.setUser);
   }
   setUser(value) {
     this.userLogged  = value;
     console.log('user get from navbar initialized');
     console.log(this.userLogged);
     if (this.userLogged !== null) {
      // hide the register and login sections
      document.getElementById('login').classList.remove('shown');
      document.getElementById('login').classList.add('hidden');
      document.getElementById('register').classList.remove('shown');
      document.getElementById('register').classList.add('hidden');
      // show the logged it tabs
      document.getElementById('home').classList.remove('hidden');
      document.getElementById('home').classList.add('shown');
     }
   }

}
