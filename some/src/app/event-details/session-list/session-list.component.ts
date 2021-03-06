import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../../shared/event.model';
import {AuthService} from '../../user/auth.service';
import {VoterService} from '../voter-service.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() public sessions: ISession[];
  @Input() public filterBy: string;
  @Input() public sortBy: string;
  public visibleSessions: ISession[] = [];

  public constructor(
    private auth: AuthService,
    private voterService: VoterService
  ) { }

  // can use this with onInit ?
  public ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  public filterSessions(filter: string): void {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((session: ISession) => {
        return session.level.toLowerCase() === filter;
      });
    }
  }

  public toggleVote(session: ISession): void {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  public userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }
}

function sortByNameAsc(s1: ISession, s2: ISession): number {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession): number {
  return s2.voters.length - s1.voters.length;
}
