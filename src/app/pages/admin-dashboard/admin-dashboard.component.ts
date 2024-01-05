import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminService:AdminService){

  }

  dataSource!:MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  ngOnInit(): void {
      this.populateData();
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName','age','status','update','delete'];

  populateData(){

    this.adminService.getAllUsers().subscribe({
      next:(res:any)=>{
        let users:UserData[]=[];
          res.forEach((element:any) => {
            console.log(element);
            let user:UserData={
              id:element.id,
              username:element.username,
              firstName:element.firstName,
              lastName:element.lastName,
              age:element.age,
              isEnabled:element.isEnabled
            }
        users=users.concat(user);
        });
       this.dataSource=new MatTableDataSource(users)
      },
      error:(err)=>{console.log(err)}
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteUser(id:number) {
    this.adminService.deleteUser(id).subscribe({
      next:res=>{
        this.populateData();
        console.log(res)
      },
      error:err=>console.log(err)
    })
  }
}

interface UserData{
    id:number,
    username:string,
    firstName:string,
    lastName:string,
    age:number,
    isEnabled:boolean
}
