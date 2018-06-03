import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { LoginResolverService } from 'src/app/resolver/login/login-resolver.service';
import { RegisterResolverService } from 'src/app/resolver/register/register-resolver.service';
import { HomeComponent } from 'src/app/components/home/home.component';
import { RegisterComponent } from 'src/app/components/register/register.component';


const routes: Routes = [
{path: 'login', component: LoginComponent, resolve: {login: LoginResolverService}},
{path: 'home', component: HomeComponent, resolve: {login: LoginResolverService}},
{path: 'register', component: RegisterComponent, resolve: {register: RegisterResolverService}},
{ path: '',   redirectTo: '/login', pathMatch: 'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    LoginResolverService,
    RegisterResolverService
  ]
})
export class AppRoutingModule { }
