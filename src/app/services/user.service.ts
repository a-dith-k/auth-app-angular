import { UserProfile } from './../pages/profile/profile.component';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient,route:Router) {


  }

  private url="http://localhost:8080/users";


  getAuthHeader(){
      return 'Bearer '+(localStorage.getItem('token') as string).trim();
  }

  headers=new HttpHeaders({
    'content-Type': "application/json",
    Authorization:this.getAuthHeader(),
  })

  private  options={
    headers:{
      'content-Type': "application/json",
      Authorization:this.getAuthHeader(),

    },
  };

  getOptions(){
    return this.options;
  }

  updateUser(formData: UserProfile) {
    console.log(this.getAuthHeader())
    return  this.http.put(this.url,JSON.stringify(formData),this.getOptions());
  }

  getUserByUsername(username:string){
    console.log(this.getAuthHeader())
    return this.http
      .get(this.url+'/'+username,this.options);
  }

  uploadProfileImage(file:File,userId:number){
    let formData=new FormData();
    formData.append('image',file);
    return this.http.post(this.url+'/'+'profile-image?id='+userId,formData,{headers:{'Authorization':this.getAuthHeader()}});
  }

  getProfileImage(userId:number){
   return this.http.get(this.url+'/'+'profile-image?userId='+userId,{responseType:'blob',headers:this.headers});
  }

}
