import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventStorageService } from './event-storage.service'

@Injectable()
export class EventListResolverService implements Resolve<any>{
  constructor(private eventService: EventStorageService) {

  }
  // resloving observarble with data that getting from ajax/http
  resolve() {
    return this.eventService.getEvents().map(events => events)
  }
}
