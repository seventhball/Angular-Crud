import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  @ViewChild(MatSort) sort = new MatSort(); 
  @ViewChild(MatPaginator) paginator?:MatPaginator;
  constructor(private userService:UserService) { }
  displayedColumns=["User Id", "Name", "Email","City","Edit","View"];
   listUsers:any=[];
   dataSource:any;
   totalLenght:number=0;;

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data=>{
      this.listUsers=data;
     this.dataSource = new MatTableDataSource<any>(this.listUsers);
     this.dataSource.sort = this.sort;
     this.totalLenght=this.listUsers.length;
    this.dataSource.paginator = this.paginator;
    })   
  }
}
