import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  loginService: any;
  logout: any;
  constructor(private route: ActivatedRoute, private navbar: NavbarService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.loginService = data.login;
      this.user = this.loginService.getUser();
      this.navbar.handleLogout(this.logout);
      this.logout = this.loginService.logOutUser();
    }) ;
   // user is the entire object
    if (!this.user) {
      this.router.navigate(['/home']);
    }
  }

  // logout() {
  //    this.route.data.subscribe((data) =>{
  //     data.login.loginService.logOutUser();
  //   })
  //   console.log('logged out from home')
  // }

}
