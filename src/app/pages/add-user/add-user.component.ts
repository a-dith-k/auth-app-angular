import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private adminService:AdminService,private router:Router ) {

  }

  invalidData=false;
  errorMessage="";


  addUser(user:any){
    this.adminService.createUser(user).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigateByUrl("/admin/dashboard");
        
      },
      error:err=>{
        this.errorMessage=err.error.message;
        this.invalidData=true;
        setTimeout(()=>{
          this.invalidData=false;
        },3000);

        console.log();
        
      }
    })
  }

}
