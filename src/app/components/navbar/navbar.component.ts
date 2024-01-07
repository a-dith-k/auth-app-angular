import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {ThisReceiver} from "@angular/compiler";
import {Observable} from "rxjs";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLoggedIn$:Observable<boolean>=new Observable<boolean>();
  currentUser$:Observable<string>=new Observable<string>();

  constructor(private AuthService:AuthService) {
  }

  ngOnInit(){
    this.isLoggedIn$=this.authService.isLoggedIn$;
    this.currentUser$=this.authService.currentUser$;

      // this.authService.currentUser$.subscribe(currentUser=>{
      //   this.currentUser=currentUser;
      // })

  }

  get authService(){
    return this.AuthService;
  }

}
