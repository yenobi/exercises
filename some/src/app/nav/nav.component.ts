import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/auth.service';
import {ISession} from '../shared/event.model';
import {EventStorageService} from '../shared/event-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public searchTerm: string = '';
  public foundSessions: ISession[];

  public constructor(private auth: AuthService,
                     private eventService: EventStorageService) {
  }

  public ngOnInit(): void {
  }

  public searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm)
      .subscribe((sessions: any) => {
      this.foundSessions = sessions;
      });
  }

}
