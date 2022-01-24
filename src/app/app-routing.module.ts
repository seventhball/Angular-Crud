import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ListGridComponent } from './components/list-grid/list-grid.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { View1userComponent } from './users/view1user/view1user.component';
const routes: Routes = [
{
  path:'users',
  children:[
    {
      path:'list',component:ViewUserComponent
    },
  
    {
      path:'add',component:AddUserComponent
    },
    {
      path:'edit/:id',component:EditUserComponent
    },
    {
      path:'view/:id',component:View1userComponent
    }
  ]
},
{
    path:'',component:ViewUserComponent  
},

// {
//   path:'search/:id',component:View1userComponent
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
