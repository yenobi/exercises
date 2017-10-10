import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EventStorageService} from '../shared/event-storage.service';
import {IEvent} from '../shared/event.model';

@Component({
  // selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public isDirty: boolean = true;
  public constructor(
    private _router: Router,
    private _events: EventStorageService) { }

  public ngOnInit(): void {
  }

  public cancel(): void {
    this._router.navigate(['/events']);
  }
  public saveEvent(formValues: IEvent): void {
    this._events.saveEvent(formValues);
    this.isDirty = false;
    this._router.navigate(['/events']);
    // console.log(formValues);
  }

}
