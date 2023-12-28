import { Component } from '@angular/core';
import {AuthService, LoginRequest} from "../../services/auth.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private authService:AuthService,private router:Router) {
  }

  invalidUsernameOrPassword=false;

  form=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)])
  })

  get username(){
    return this.form.get('username')
  }

  get password(){
    return this.form.get('password')
  }


  login(form: FormGroup) {
    console.log("submitted")

    let request:LoginRequest={
      username:form.value.username,
      password:form.value.password
    }

    this.authService.login(request)
      .subscribe((res:any)=> {
        if(res.token){
          localStorage.setItem('token',res.token)
          this.authService.IsLoggedInSubject.next(true);
          this.authService.CurrentUserSubject.next(this.authService.currentUser());
          this.router.navigate(['/']);
        }


      },(err:Response)=>{
        this.invalidUsernameOrPassword=true;
        setTimeout(()=>{
          this.invalidUsernameOrPassword=false;
        },4000)
      });
  }
}
