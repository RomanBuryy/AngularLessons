import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";

const routes: Routes = [
  {path: '', component: UsersComponent, children:[

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
