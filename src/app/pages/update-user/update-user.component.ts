import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {
  logBuilderStatusWarnings
} from "@angular-devkit/build-angular/src/builders/browser-esbuild/builder-status-warnings";
import {AuthService} from "../../services/auth.service";
import {AdminService} from "../../services/admin/admin.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {getLocaleFirstDayOfWeek} from "@angular/common";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  constructor(
    private adminService:AdminService,
    private route:ActivatedRoute
  ) {

  }
  form:FormGroup=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')

  })

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  userId!:number;

  ngOnInit() {
   this.route.paramMap
     .subscribe(
       {next:res=>
         {
           let userId:number;
           if(res.get('id')==null)
             return;

           this.userId =
             parseInt(res.get('id') as string)

          this.adminService
            .getUserById(this.userId)
            .subscribe({
                next:(res:any)=>{
                 this.form=new FormGroup({
                    username:new FormControl(res.username,Validators.required),
                    password:new FormControl('',Validators.required)
                  })
                },
                error:err=>console.log(err)
            });
     },
     error:err=>console.log(err)
   })
  }


  getUserData(){

  }

  updateUser(value: any) {
      this.adminService.updateUser(value,this.userId).subscribe(
        {
          next:res=>console.log(res),
          error:err=>console.log(err)
        }
      )
  }
}
