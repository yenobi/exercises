import { Component, OnInit } from '@angular/core';
import { EventStorageService } from '../shared/event-storage.service';
import { ActivatedRoute } from '@angular/router';
import {IEvent} from '../shared/event.model';

@Component({
  // selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public events: IEvent[];

  public constructor(
    private eventStorageService: EventStorageService,
    private route: ActivatedRoute) {
   }

  //  better to put such things (fetching data with ajax for exmaple)
  // to onInit part of components lifecycle, not in constructor - why ?
  // it needs some time to execute -> longer loading ?
  public ngOnInit(): void {
    this.events = this.route.snapshot.data['events']
    // this.eventStorageService.getEvents().subscribe(res => {
    //   this.events = res;
    // }
    // );
  }
}
