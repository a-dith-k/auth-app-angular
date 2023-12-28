import { Component } from '@angular/core';
import {AuthService, RegisterRequest} from "../../services/auth.service";
import {Form, FormGroup, NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router:Router,
              private registerService:AuthService) {

  }

  invalidUsername=false;
  serverResponse:string="";

  registerUser(form:NgForm) {
    console.log(form.value);

      let user:RegisterRequest={
            username:form.value.username,
            password:form.value.password
      }

    this.registerService
      .registerUser(user).subscribe((response:any) =>{
      if(response.userId)
        this.router.navigateByUrl("/sign-in").then()
    }, err => {
      if(err){
        this.invalidUsername=true;
        setTimeout(()=>{
          this.invalidUsername=false;
        },4000)
        this.serverResponse=err.error.message;
        console.log(err)
      }
    })
  }





}


