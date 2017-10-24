import { Injectable } from '@angular/core';
import {ISession} from '../shared/event.model';

@Injectable()
export class VoterService {

  public constructor() { }

  public deleteVoter(session: ISession, voterName: string): void {
    session.voters = session.voters.filter((voter: string) => voter !== voterName);
  }

  public addVoter(session: ISession, voterName: string): void {
    session.voters.push(voterName);
  }

  public userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some((voter: string) => voter === voterName);
  }

}
