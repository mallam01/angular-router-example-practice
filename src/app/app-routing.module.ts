import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { EditRoomComponent } from './room/edit-room/edit-room.component';

import { CanActivateGuard } from './can-activate-guard.service';
import { ProfileDeactivateGuard } from './room/profile-deactivate-guard.service';
import { RoomResolver } from './room/edit-room/room-resolver.service';

import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'room', component: RoomComponent, canActivate: [CanActivateGuard], children: [
      { path: 'edit/:id', component: EditRoomComponent, canDeactivate: [ProfileDeactivateGuard], resolve: {room: RoomResolver} }
    ]
  },
   {path: 'not-found', component: ErrorComponent, data: {message: "Not Found"}},
   {path: '**', redirectTo: 'not-found'}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(appRoutes);

//or
/*

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
*/