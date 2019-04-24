import { Component, OnInit } from '@angular/core';
import { RoomService, Room } from './room.service';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  roomMembers: Room[] = [];
  constructor(private roomSrv: RoomService) { }

  ngOnInit() {
   this.roomMembers =  this.roomSrv.getVisitors();
  }

}