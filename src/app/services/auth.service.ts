import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }

  private isLoggedInSubject=new BehaviorSubject<boolean>(this.isLoggedIn());
  isLoggedIn$=this.isLoggedInSubject.asObservable();

  private currentUserSubject=new BehaviorSubject<string>(this.currentUser());
  currentUser$=this.currentUserSubject.asObservable();

  get IsLoggedInSubject(){
    return this.isLoggedInSubject;
  }

  get CurrentUserSubject (){
    return this.currentUserSubject;
  }

  private url="http://localhost:8080/auth";
  private  options={
    headers:{
      'content-Type': "application/json"
    }
  }

  registerUser(request:RegisterRequest) {
   return  this.http
      .post(this.url+"/register", JSON.stringify(request), this.options);
  }

  login(loginRequest:LoginRequest){
   return  this.http.post(this.url+"/login",JSON.stringify(loginRequest),this.options);
  }


  isLoggedIn():boolean{
    let token= localStorage.getItem('token');
   if(!token)return false;
   let jwtHelper=new JwtHelperService();
   let isExpired=jwtHelper.isTokenExpired(token);
    return !isExpired;
  }



  currentUser(){
    let token= localStorage.getItem('token');
    if(token==null)return null;
    let helper
      =new JwtHelperService();
    return helper.decodeToken(token).sub;
  }


  logOut() {
    this.router.navigateByUrl("/",).then(res=>console.log(res)).catch(err=>console.log(err))
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    // this.CurrentUserSubject.next("");
  }
}

export interface LoginRequest {
    username:string
    password:string
}

export interface RegisterRequest{
  username:string,
  password:string
}
