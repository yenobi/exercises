import {Component, Input, OnInit } from '@angular/core';
import {IEvent} from '../shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() public event: IEvent;

  public constructor() { }

  public ngOnInit(): void {
  }

}
