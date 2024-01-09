import { HttpClientModule } from "@angular/common/http";
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { DialogAnimationComponent } from './components/dialog-animation/dialog-animation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { AdminService } from './services/admin/admin.service';
import { AuthService } from "./services/auth/auth.service";
import { UserReducer, reducer } from './store/user/user.reducer';
import { AddUserComponent } from "./pages/add-user/add-user.component";
import { MaterialModule } from "./material.module";
import{StoreDevtoolsModule} from "@ngrx/store-devtools"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    SignInComponent,
    ProfileComponent,
    AccessDeniedComponent,
    DialogAnimationComponent,
    AdminDashboardComponent,
    UpdateUserComponent,
    AddUserComponent
  ],
    imports: [
        StoreModule.forRoot({ userState: reducer,user:UserReducer }),
        StoreDevtoolsModule.instrument({maxAge:25,logOnly:!isDevMode()}),
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpClientModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
  providers: [AuthService,MatDialog,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
