import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { EditRoomComponent } from './room/edit-room/edit-room.component';
import { ROUTING } from './app-routing.module';
import { RoomService } from './room/room.service';
import { AuthService } from './auth.service';

import { CanActivateGuard } from './can-activate-guard.service';

import { ProfileDeactivateGuard } from './room/profile-deactivate-guard.service';

import { ErrorComponent } from './error/error.component';

import { RoomResolver } from './room/edit-room/room-resolver.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ROUTING ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, RoomComponent, EditRoomComponent, ErrorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RoomService, AuthService, CanActivateGuard, ProfileDeactivateGuard, RoomResolver] 
})
export class AppModule { }
