import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginResolverService } from 'src/app/resolver/login/login-resolver.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from 'src/app/services/register/register.service';
// import { RegisterResolverService } from 'src/app/resolver/register/register-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, LoginResolverService, NavbarService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
