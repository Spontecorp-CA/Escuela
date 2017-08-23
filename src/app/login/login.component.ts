import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { User } from '../model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  loggedUser: User = {
    id: 0,
    user: "",
    psw: "",
    profile:9
  };

  constructor(
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getUsers()
      .then(users => this.users = users);
  }

  checkLogin(): boolean {
    let checked = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.loggedUser.user === this.users[i].user
        && this.loggedUser.psw === this.users[i].psw) {
        checked = true;
      }
    }
    console.log(checked);
    return checked;
  }
}
