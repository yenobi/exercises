import { Injectable } from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  public currentUser: IUser;

  public constructor() { }
  public loginUser(username: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: 'userName',
      firstName: 'John',
      lastName: 'Dou'
    };
  }
  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }
  public updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

}
