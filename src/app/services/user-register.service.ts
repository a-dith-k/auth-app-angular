import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {RegisterRequest} from "../pages/signup/signup.component";


@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  private url="";

  private  options={
    headers:{
      contentType: "application/json"
    }
  }

  constructor(private http:HttpClient) { }

  register(request:RegisterRequest) {
    this.http.post(this.url,request).subscribe()
  }
}
