import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  compLog: any;
  constructor(private route: ActivatedRoute, private navbar: NavbarService, private router: Router) { }
  loginService: any;
  user: any;
  ngOnInit() {
    // this.compLog = this.route.snapshot.data['login'];
    // console.log(this.compLog)
    this.route.data.subscribe((data) => {
      this.loginService = data.login;
      this.user = this.loginService.getUser();
      this.navbar.handleHome(this.goToHome);
    }) ;
    // console.log(this.compLog.loginUser('gigel', 'pass'));
  }

  login(user) {
    console.log(user.value);
    this.loginService.loginUser(user.value);
    this.navbar.handleLoginPage(this.getUser);
      if (this.user === undefined) {
         console.log('username or password incorrect');
      } else {
        console.log(this.user);
      }
  }

  getUser(user) {
    this.user = user;
    console.log('get user initialezed from register comp');
    console.log(this.user);
  }

  goToHome () {
    this.router.navigate(['/home']);
  }


}
