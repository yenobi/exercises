import { Component, OnInit } from '@angular/core';
// routes to components - didn;t line them
import { EventStorageService } from '../shared/event-storage.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: object[];

  constructor(private eventStorageService: EventStorageService) {
   }

  //  better to put such things (fetching data with ajax for exmaple)
  // to onInit part of components lifecycle, not in constructor - why ? 
  // it needs some time to execute -> longer loading ? 
  ngOnInit() {
    this.events = this.eventStorageService.getEvents();
  }
}
