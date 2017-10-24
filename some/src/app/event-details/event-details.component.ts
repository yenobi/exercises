import { Component, OnInit } from '@angular/core';
import { EventStorageService } from '../shared/event-storage.service';
import {ActivatedRoute, Params} from '@angular/router';
import {IEvent} from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public event: IEvent;
  public addMode: boolean;
  public filterBy: string = 'all';
  public sortBy: string = 'votes';

  public constructor(private eventService: EventStorageService, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    // this fix problem of navigating from component to itself but with new id
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    });

    // this creates a bug with self-navigating component
    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  public addSession(): void {
    this.addMode = true;
  }

  public cancelAddSession(): void {
    this.addMode = false;
  }

}
