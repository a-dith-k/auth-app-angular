import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {RegisterRequest} from "../pages/signup/signup.component";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  private url="http://localhost:8080/auth/register";

  private  options={
    headers:{
      'content-Type': "application/json"
    }
  }

  constructor(private http:HttpClient) { }

  register(request:RegisterRequest) {
    this.http.post(this.url,JSON.stringify(request),this.options).subscribe(response=>{
      console.log(response)
    })
  }
}
