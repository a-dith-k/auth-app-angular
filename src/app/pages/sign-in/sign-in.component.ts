import { UserNameValidators } from './../../validators/username.validators';
import { Component } from '@angular/core';
import {AuthService, LoginRequest} from "../../services/auth/auth.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Store, props } from '@ngrx/store';
import { login } from 'src/app/store/user.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private authService:AuthService,private router:Router,private store:Store<{userState:boolean}>) {
  }

  invalidUsernameOrPassword=false;

  form=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10),UserNameValidators.cannotContainSpace]),
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
      .subscribe(
        {next:(res:any)=> {
            if(res.token){
              localStorage.setItem('token',res.token)
              this.authService.IsLoggedInSubject.next(true);
              this.authService.CurrentUserSubject.next(this.authService.currentUser());
              this.router.navigate(['/']);
              this.store.dispatch(login({username:res.username}));
            }
          },
        error:(err:Response)=>{
            this.invalidUsernameOrPassword=true;
            setTimeout(()=>{
              this.invalidUsernameOrPassword=false;
            },4000)
          }
        
        });
  }
}
