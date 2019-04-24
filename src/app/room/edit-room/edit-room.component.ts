import { Component, OnInit } from '@angular/core';
import { RoomService, Room } from '.././room.service';
import {  ActivatedRoute, Router, Params, Data} from '@angular/router';
import { CanComponentDeactivate } from '../profile-deactivate-guard.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit, CanComponentDeactivate {
  address: string = "";
  roomMember : Room
  allowEdit: boolean = false;
  changesSaved: boolean = false;
  constructor(private roomSrv: RoomService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /* pre-fetched with the help of resolver
    const id = +this.activatedRoute.snapshot.params['id'];
    this.roomMember = this.roomSrv.getVisitor(id);
    this.address = this.roomMember.address;
    this.activatedRoute.params
    .subscribe(
      (params: Params) => {
        this.roomMember = this.roomSrv.getVisitor(+params['id']);
       this.address = this.roomMember.address;
      }
    ) 
    */
    console.log(this.activatedRoute.snapshot.queryParams['allowEdit']);
     console.log(this.activatedRoute.snapshot.fragment);
     this.activatedRoute.queryParams
     .subscribe(
       (queryParams: Params) => {
         this.allowEdit = queryParams['allowEdit'] == 1 ? true : false;
       }
     )

  this.activatedRoute.data
  .subscribe(
    (data: Data) => {
      this.roomMember =  data['room'];
      this.address = this.roomMember.address;
    }
  )
  }
  onChange() {
    this.roomMember.address = this.address;
    this.roomSrv.updateVisitor(this.roomMember);
    this.changesSaved = true; 
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  canDeactivate() : Observable<boolean> | Promise<boolean>|  boolean {
    if(!this.allowEdit) {
      return true;
    }
    if((!this.changesSaved) && (this.roomMember.address !== this.address)) {
      return  confirm('do you want to leave?')
    } else {
      return true;
    }
  }
}