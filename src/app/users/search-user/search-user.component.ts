import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  userId:any='';
  userDetails:any;
    constructor(private userService:UserService,
      private activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(data=>{
        this.userId=data['id'];
      })
      this.userService.viewUser(this.userId).subscribe(data=>{
        this.userDetails=data;
      });
    }
}
