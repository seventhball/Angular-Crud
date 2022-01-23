import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 baseUrl="https://jsonplaceholder.cypress.io/"; 

  constructor(private http:HttpClient) {
   }
   listUsers(){
     return  this.http.get(this.baseUrl+ 'users');
  }
  addUser(userObj:any){
    return this.http.post(this.baseUrl+'users',userObj)
  }
  viewUser(id:any){
    return this.http.get(this.baseUrl+ 'users/' + id);
  }
  updateUser(id:any, userObj:any){
    return this.http.put(this.baseUrl+'users/'+id ,userObj)
  }
}
