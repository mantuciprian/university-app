import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable()
// tslint:disable-next-line:no-unused-expression
export class LoginResolverService implements Resolve<any> {
  result = this.login.getMessage();
  constructor(private login: LoginService) {}
  resolve() {
    // console.log('data:::' + this.login.getMessage());
    return this.login;
  }
}
