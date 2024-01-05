import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/admin/users'

  getAllUsers(){
   return this.http.get(this.url,{headers:{Authorization:'Bearer '.concat(localStorage.getItem('token') as string)}});
  }

  createUser(user:any){
   return  this.http.post(this.url,JSON.stringify(user),{headers:{Authorization:'Bearer '.concat(localStorage.getItem('token') as string),'Content-Type':'application/json' }});
  }

  deleteUser(id: number) {
   return  this.http.delete(this.url+'/'+id,{headers:{Authorization:'Bearer '.concat(localStorage.getItem('token') as string)}});
  }

  getUserById(userId: number) {

    return this.http.get(`${this.url}/${userId}`,{headers:{Authorization:'Bearer '.concat(localStorage.getItem('token') as string)}});

  }

  updateUser(user:any,id:number) {
   return  this.http.put(`${this.url}/${id}`,JSON.stringify(user),{headers:{Authorization:'Bearer '.concat(localStorage.getItem('token') as string)}});
  }
}
