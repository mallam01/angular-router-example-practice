import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Room, RoomService  } from  '.././room.service'
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RoomResolver implements Resolve<Room> {

  constructor(private roomSrv: RoomService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Room> | Promise<Room> | Room {
  
    return this.roomSrv.getVisitor(+route.params['id']);


  }

}
