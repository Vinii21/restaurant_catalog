import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from "./views/credits/credits.component";
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { UserComponent } from './views/user/user.component';
import { authGuard } from './auth.guard';
import { RegisterLoginComponent } from './views/register-login/register-login.component';
import { PanelUserComponent } from './views/panel-user/panel-user.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "credits", component: CreditsComponent},
  {path: "user", component: UserComponent, children: [
    {path: "panel", component: PanelUserComponent, canActivate: [authGuard]},
    {path: "login", component: RegisterLoginComponent}
  ]},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
