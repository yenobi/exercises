import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventStorageService } from './event-storage.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate{
  constructor(private eventService: EventStorageService, 
                        private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExist) this.router.navigate(['/404'])
    return eventExist;
  }

}
