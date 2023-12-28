import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AppComponent} from "./app.component";
import {authGuard} from "./guard/auth.guard";
import {AccessDeniedComponent} from "./components/access-denied/access-denied.component";

const routes: Routes = [{path:"",component:HomeComponent},
                        {path:"sign-up",component:SignupComponent},
                        {path:"sign-in",component:SignInComponent},
                        {
                          path:"users/:username",
                          component:ProfileComponent,
                          canActivate:[authGuard]
                        },
                        {path:"**",component:AccessDeniedComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
