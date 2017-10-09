import { Injectable } from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  private _currentUser: IUser;

  public constructor() { }
  public loginUser(username: string, password: string): void {
    this._currentUser = {
      id: 1,
      userName: 'userName',
      firstName: 'John',
      lastName: 'Dou'
    };
  }
  public isAuthenticated(): boolean {
    return !!this._currentUser;
  }

}
