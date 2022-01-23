import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  userId:any;
  userDetails:any;
  ViewUserForm:FormGroup=new FormGroup({});
  dataLoaded:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private formBuilder:FormBuilder,
    private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data=>{
    this.userId=data['id'];
    });
    if(this.userId!== ''){
this.userService.viewUser(this.userId)
.toPromise()
.then(data=>{
  this.userDetails=data;

  // this.editUserForm=this.formBuilder.group({
  //   'name':new FormControl(this.userDetails.name),
  //   'email':new FormControl(this.userDetails.email),
  //   'city':new FormControl(this.userDetails.address.city) 
  // })
  this.dataLoaded=true;
})
.catch(err=>{
  console.log(err);
})
    }
  }
 onSubmit(){
this.userService.updateUser(this.userId,this.ViewUserForm.value).subscribe(data=>{
 console.log(data);
 },
 err=>{
   this._snackBar.open("No record Found");
 })
  }
}
