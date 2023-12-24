import { Component } from '@angular/core';
import {UserRegisterService} from "../../services/user-register.service";
import {Form, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private registerService:UserRegisterService) {

  }

  registerUser(form:NgForm) {
    console.log(form.value);

    let user:RegisterRequest={
          username:form.value.username,
          password:form.value.password
    }

    this.registerService.register(user)
  }
}

export interface RegisterRequest{
  username:string,
  password:string
}
