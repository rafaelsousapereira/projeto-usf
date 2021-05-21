import { UpdateRoomComponent } from './update-room/update-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomDetailsComponent } from './room-details/room-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomListComponent },
  { path: 'add', component: CreateRoomComponent },
  { path: 'update/:id', component: UpdateRoomComponent },
  { path: 'details/:id', component: RoomDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
