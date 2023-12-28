import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-animation',
  templateUrl: './dialog-animation.component.html',
  styleUrls: ['./dialog-animation.component.css']
})
export class DialogAnimationComponent {
  constructor(public dialogRef: MatDialogRef<DialogAnimationComponent>) {
  }

   ngOnInit(){
     this.dialogRef.afterClosed().subscribe(
       ()=>{
         console.log("closed")
       }
     )
   }

}
