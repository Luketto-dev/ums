import { UserService } from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  @Input() user: User;

  constructor(private userService: UserService) {
    this.user = new User()
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user)
    }else{
      this.userService.createUser(this.user)
    }
  }

  resetForm() {
    if (this.user.id === 0) {
      this.user = new User()
    }
  }
}
