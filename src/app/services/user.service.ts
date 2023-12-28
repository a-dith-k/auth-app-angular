import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:8080/users";
  private authHeader='Bearer '+(localStorage.getItem('token') as string).trim();

  private  options={
    headers:{
      'content-Type': "application/json",
      Authorization: this.authHeader
    },
  };

  getUserByUsername(username:string){
    return this.http
      .get(this.url+'/'+username,this.options);
  }
}
