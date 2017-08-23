import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { USERS } from './mock-logins';

@Injectable()
export class LoginService {

  constructor() { }

  getUsers(): Promise<User[]>{
    return Promise.resolve(USERS);
  }

}
