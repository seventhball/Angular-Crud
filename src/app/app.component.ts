import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularLearn';
  name ='Angular';
 username="";
 month=13;
 isDarkTheme=false;
 toggleTheme(){
   this.isDarkTheme=!this.isDarkTheme;
 }
}
