import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm:FormGroup=new FormGroup({});
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm=this.formBuilder.group({
      'name':new FormControl('',[Validators.required, Validators.minLength(8),Validators.pattern("[a-zA-Z][a-zA-Z ]")]),
      'email':new FormControl('',[Validators.required, Validators.email]),
      'city':new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]")])
    })
  }
createUser(){
  this.userService.addUser(this.addUserForm.value).subscribe(data=>{
   this._snackBar.open("user created successfully ");
  },
  err=>{
    this._snackBar.open("user creation failed");
  })
}

}
