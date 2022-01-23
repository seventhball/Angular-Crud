import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-grid',
  templateUrl: './list-grid.component.html',
  styleUrls: ['./list-grid.component.scss']
})
export class ListGridComponent implements OnInit {

  constructor(private userService:UserService) { }
  column=["User Id", "Name", "Email","City","Edit"];
 // index=["id","name","email","address.street"]
   listUsers:any;
  ngOnInit(): void {
    this.userService.listUsers().subscribe(data=>{
      this.listUsers=data;
    })
  }

}
