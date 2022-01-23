import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListGridComponent } from './list-grid/list-grid.component';
import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchComponent,
    AddItemComponent,
    ListGridComponent
  ],
  imports: [
    MatIconModule,
    RouterModule,
    CommonModule,   
  ],
  exports:[
    SearchComponent,
    AddItemComponent,
    ListGridComponent,
 
  ]
})
export class ComponentsModule { }
