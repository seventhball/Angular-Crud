import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListGridComponent } from './list-grid/list-grid.component';
import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    SearchComponent,
    AddItemComponent,
    ListGridComponent
  ],
  imports: [
    MatIconModule,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    CommonModule,   
  ],
  exports:[
    SearchComponent,
    AddItemComponent,
    ListGridComponent,
 
  ]
})
export class ComponentsModule { }
