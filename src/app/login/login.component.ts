import { Component, OnInit } from '@angular/core';
import { Router }            from "@angular/router";

import { LoginService } from './login.service';
import { User }         from '../model/user';

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
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.loginService.getUsers()
      .then(users => this.users = users);
  }

  verifyUser(): void {
    let checked :boolean = this.checkLogin();
    if(checked){
      switch(this.loggedUser.profile){
        case 0:
          console.log("Usuario administrador de la aplicación");
          this.gotoProfile(['/admin']);
          break;
        case 1:
          console.log("Usuario administrativo");
          break;
        case 2:
          console.log("Usuario de control de estudios");
          break;
        case 3:
          console.log("Usuario Profesor");
          break;  
        case 4:
          console.log("Usuario representante");
          break;  
        default:
          console.log("No está entrando a comparar");
      }
    } 
  }

  private checkLogin(): boolean {
    let checked = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.loggedUser.user === this.users[i].user
        && this.loggedUser.psw === this.users[i].psw) {
          this.loggedUser = this.users[i];
          checked = true;
      }
    }
    return checked;
  }

  private gotoProfile(route: string[]): void{
    console.log('Llegó al navegador como ' + route)
    this.router.navigate(route);
  }
}
