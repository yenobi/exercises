import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  public constructor(
    private _auth: AuthService,
    private _router: Router,
    // @Inject(TOASTR_TOKEN) private _toastr: IToastr
  ) { }

  public ngOnInit(): void {
    this.firstName = new FormControl(
      this._auth.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(
      this._auth.currentUser.lastName,
      Validators.required);
    this.profileForm = new FormGroup({
      'firstName': this.firstName,
      'lastName': this.lastName
    });
  }
  public cancel(): void {
    this._router.navigate(['events']);
  }
  public saveProfile(formValues): void {
    if (this.profileForm.valid) {
      this._auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      // toastr.success('Profile saved');
      // this._router.navigate(['events']);
    }
  }
  public validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }
  public validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }
}
