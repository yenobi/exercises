import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public constructor(private auth: AuthService) { }

  public ngOnInit(): void {
  }

}
