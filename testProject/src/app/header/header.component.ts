import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../shared/shared.module'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
