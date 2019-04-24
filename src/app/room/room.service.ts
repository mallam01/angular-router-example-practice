import { Injectable } from '@angular/core';

export interface Room {
  id: number;
  name: string;
  address: string;
}

@Injectable()
export class RoomService {

  visitorStore: Room[] = [
    {
      id: 1,
      name: "Rohit Sharma",
      address: "Talawade, Pune"
    },
    {
      id: 2,
      name: "Prince Kumar",
      address: "Hinjewadi, Pune"
    }
  ];

  constructor() { }

  getVisitors(): Room[] {
    return this.visitorStore;
  }
  getVisitor(id: number): Room {
    const visitor = this.visitorStore.find(
      (v) => {
        return v.id == id;
      }
    )
    return visitor;
  }

  updateVisitor(data: Room) {
    const visitor = this.visitorStore.find(
      (v) => {
      return v.id == data.id
      }
    )
    visitor.address = data.address;
  }
}