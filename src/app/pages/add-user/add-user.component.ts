import { Component } from '@angular/core';
import {AdminService} from "../../services/admin/admin.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private adminService:AdminService) {

  }


  addUser(user:any){
    this.adminService.createUser(user).subscribe({
      next: res =>console.log(res),
      error:err=>console.log(err)
    })
  }

}
