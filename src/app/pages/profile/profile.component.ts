import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DialogAnimationComponent} from "../../components/dialog-animation/dialog-animation.component";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";

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
    id:0,
    username:"",
    firstName:"",
    lastName:"",
    place:"",
    age:0
  }

  profileUrl:string="assets/profile/user.png";


  ngOnInit(): void {



    this.route.paramMap.subscribe(params=>{
      let username=params.get('username') as string;
      this.userService.getUserByUsername(username).subscribe((res:any)=>{
        this.currentUser.id=res.id;
        this.currentUser.username=res.username;
        this.currentUser.firstName=res.firstName;
        this.currentUser.lastName=res.lastName;
        this.currentUser.place=res.place;
        this.currentUser.age=res.age;
        this.getProfileImage();
      })
    });
  }
  isEditMode:boolean=false;

  form!:FormGroup;


  edit(){
    this.form=new FormGroup({
      username:new FormControl({value:this.currentUser.username,disabled:true}),
      firstName:new FormControl(this.currentUser.firstName,Validators.required),
      lastName:new FormControl(this.currentUser.lastName,Validators.required),
      place:new FormControl(this.currentUser.place,Validators.required),
      age:new FormControl(this.currentUser.age,Validators.required),

      })

    this.isEditMode=!this.isEditMode;

    }



  updateProfile(formData:UserProfile){
    formData.id=this.currentUser.id;
    formData.username=this.currentUser.username
    console.log(formData);
    this.userService.updateUser(formData).subscribe({
      next:(result)=>{
        console.log(result);
        this.ngOnInit();
      },
      error:(err)=>{
        console.log(err);
      }

    })
    this.isEditMode=false;

  }

  file!:File;

  onFileChange(event:any) {
    let files=event.target.files;
     if(files.length>0){
      this.file=files[0];
     }
  }

  uploadProfile(){
    this.userService.uploadProfileImage(this.file,this.currentUser.id).subscribe({
      next:res=>this.getProfileImage(),
      error:err=>console.log(err)

  });
  }

  getProfileImage(){
    this.userService.getProfileImage(this.currentUser.id).subscribe({
      next:(image:any)=>{
         let reader=new FileReader();
         reader.readAsDataURL(image);
         reader.onload=e=>this.profileUrl=e.target?.result as string;
      },
      error:(err)=>{
         console.log(err);
      }
    })
  }


  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(DialogAnimationComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }
}

export interface UserProfile{
  id:number,
  username:string
  firstName:string
  lastName:string
  place:string
  age:number
}

