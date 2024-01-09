import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {ThisReceiver} from "@angular/compiler";
import {Observable} from "rxjs";
import { Store } from '@ngrx/store';
import { ObserversModule } from '@angular/cdk/observers';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  // isLoggedIn$:Observable<boolean>=new Observable<boolean>();
  currentUser$:Observable<string>=new Observable<string>();

  login$=new Observable<boolean>;

  constructor(private AuthService:AuthService,private store:Store<{userState:boolean}>) {
     this.login$= store.select('userState');
     console.log(this.login$);
     
  }

  ngOnInit(){
    // this.isLoggedIn$=this.authService.isLoggedIn$;
    this.currentUser$=this.authService.currentUser$;

      // this.authService.currentUser$.subscribe(currentUser=>{
      //   this.currentUser=currentUser;
      // })

  }

  get authService(){
    return this.AuthService;
  }

}
