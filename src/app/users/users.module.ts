import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { View1userComponent } from './view1user/view1user.component';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
import { SearchUserComponent } from './search-user/search-user.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    View1userComponent,
    SearchUserComponent
  ],
  imports: [
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
    CommonModule
  ],
  exports:[
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    View1userComponent,
    SearchUserComponent
  ],
  providers:[
    {
      provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:3000}
    }
  ]
})
export class UsersModule { }
