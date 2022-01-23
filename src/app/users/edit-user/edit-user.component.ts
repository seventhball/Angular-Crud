import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {
  userId:any;
  userDetails:any;
  editUserForm:FormGroup=new FormGroup({});
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

  this.editUserForm=this.formBuilder.group({
    'name':new FormControl(this.userDetails.name,[Validators.required, Validators.minLength(8),Validators.pattern('^[a-zA-Z \-\']+')]),
    'email':new FormControl(this.userDetails.email,[Validators.required, Validators.email]),
    'city':new FormControl(this.userDetails.address.city,[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]) 
  })
  this.dataLoaded=true;
})
.catch(err=>{
  console.log(err);
})
    }
  }
  updateUser(){
this.userService.updateUser(this.userId,this.editUserForm.value).subscribe(data=>{
  this._snackBar.open("user updated successfully ");
 },
 err=>{
   this._snackBar.open("user updation failed");
 })
  }

}
