import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () =>  Observable<boolean> | Promise<boolean> | boolean
}


export class ProfileDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor() {}

  canDeactivate(component: CanComponentDeactivate,
  router: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.canDeactivate();

  }

}