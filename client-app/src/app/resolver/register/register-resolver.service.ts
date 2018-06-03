import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/services/register/register.service';


@Injectable()
// tslint:disable-next-line:no-unused-expression
export class RegisterResolverService implements Resolve<any> {
  constructor(private register: RegisterService) {}
  resolve() {
    // console.log('data:::' + this.login.getMessage());
    return this.register;
  }
}
