import { CanActivate, Router } from '@angular/router';
import {Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class CanActivateGuard implements CanActivate {

constructor(private authSrv: AuthService, private router: Router) {}

canActivate(): Observable<boolean> | Promise<boolean> | boolean {

  return  this.authSrv.isAuthenticated()
  .then(
    (authentication: boolean) => {
      if(authentication) {
        console.log(authentication);
        return true;
      } else {
        console.log("Not authenticated")
        this.router.navigate(['/']);
      }
    }
  )


}
} 