import { AuthGuard } from './_guards/auth.guard';
import { MessagesComponent } from './members/messages/messages.component';
import { ListsComponent } from './members/lists/lists.component';
import { MemeberListComponent } from './members/memeber-list/memeber-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'members', component: MemeberListComponent, canActivate: [AuthGuard]},
  {path: 'members/:id', component: MemeberListComponent, canActivate: [AuthGuard]},
  {path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
  {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
