import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public constructor(private _auth: AuthService, private _router: Router) { }

  public ngOnInit(): void {
  }
  public login(formValues): void {
    this._auth.loginUser(formValues.userName, formValues.password);
    this._router.navigate(['events']);
  }
  public cancel(): void {
    this._router.navigate(['events']);
  }

}
