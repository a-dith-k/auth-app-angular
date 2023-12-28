import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from '@angular/material/input';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import {MatCardModule} from "@angular/material/card";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { DialogAnimationComponent } from './components/dialog-animation/dialog-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    SignInComponent,
    ProfileComponent,
    AccessDeniedComponent,
    DialogAnimationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        FormsModule,
        HttpClientModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCardModule,
        MatDialogModule
    ],
  providers: [AuthService,MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
