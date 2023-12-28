import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DialogAnimationComponent} from "../../components/dialog-animation/dialog-animation.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(
    public dialog: MatDialog,
    private router:Router,
    private route:ActivatedRoute,
    private userService:UserService) {
  }

  currentUser:UserProfile={
    username:"",
    firstName:"",
    lastName:"",
    place:"",
    age:0
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      let username=params.get('username') as string;
      this.userService.getUserByUsername(username).subscribe((res:any)=>{
        this.currentUser.username=res.username;
        this.currentUser.firstName=res.firstName;
        this.currentUser.lastName=res.lastName;
        this.currentUser.place=res.place;
        this.currentUser.age=res.age;
      })
    });
  }


  isEditMode:boolean=false;
  updateProfile(){
    this.isEditMode=false;
    console.log("form-update request")
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

export interface UserProfile{
  username:string
  firstName:string
  lastName:string
  place:string
  age:number
}

