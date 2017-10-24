import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upvote',
  template: `
    <div class="voitingWidgetContainer pointable" (click)="onClick()">
      <div class="well voitingWidget">
        <div class="voitingButton">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse voitingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() public count: number;
  @Input() public set voted(val: boolean) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() public vote: EventEmitter<any> = new EventEmitter;
  public iconColor: string;

  public constructor() { }

  public ngOnInit(): void {
  }

  public onClick(): void {
    this.vote.emit({});
  }

}
