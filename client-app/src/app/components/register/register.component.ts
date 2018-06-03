import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerService: any;
  constructor(
    private register: RegisterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.registerService = data.register;
    }) ;
  }

  registerUser(userData) {
    console.log(userData.value);
    this.registerService.isAvailable(userData.value);
  }

}
