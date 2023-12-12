import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {StartComponent} from "./start/start.component";
import {ItemsComponent} from "./items/items.component";
import {authGuard} from "./auth.guard";
import {UsersComponent} from "./users/users.component";
import {adminGuard} from "./admin.guard";

let routes: Routes;
routes = [
  {path: "items", component: ItemsComponent, canActivate: [authGuard]},
  {path: "users", component: UsersComponent, canActivate: [authGuard, adminGuard]},
  {path: "", pathMatch: "full", component: StartComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
