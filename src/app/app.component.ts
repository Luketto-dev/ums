import { Component } from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ums';
  showForm = false
  userSelected: User = new User()

  updateUser = (user : User) => {

    this.userSelected = user;
    this.showForm = true;

  }

  newUser(){
    this.userSelected = new User();
    this.showForm = true;
  }
}
