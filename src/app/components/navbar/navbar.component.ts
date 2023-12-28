import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ThisReceiver} from "@angular/compiler";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLoggedIn=false;
  currentUser:string="";

  constructor(private AuthService:AuthService) {
  }

  ngOnInit(){
    this.authService.isLoggedIn$.subscribe(isLoggedIn=>{
      this.isLoggedIn=isLoggedIn;
    })

      this.authService.currentUser$.subscribe(currentUser=>{
        this.currentUser=currentUser;
      })

  }

  get authService(){
    return this.AuthService;
  }

}
