import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {SignInComponent} from "./pages/sign-in/sign-in.component";

const routes: Routes = [{path:"",component:HomeComponent},
                        {path:"sign-up",component:SignupComponent},
                        {path:"sign-in",component:SignInComponent},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
