import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {


  constructor(private userService:UserService) { }
  column=["User Id", "Name", "Email","City","Edit","View"];
 // index=["id","name","email","address.street"]
   listUsers:any;
  ngOnInit(): void {
    this.userService.listUsers().subscribe(data=>{
      this.listUsers=data;
    })
  }
}
