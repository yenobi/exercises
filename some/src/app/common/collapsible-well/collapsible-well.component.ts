import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>
  `,
  styles: [`.well {
  border: 1px solid black;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 20px
}`]
})
export class CollapsibleWellComponent implements OnInit {
  // @Input() public title: string;
  public visible: boolean = false;

  public constructor() { }

  public ngOnInit(): void {
  }

  public toggleContent(): void {
    this.visible = !this.visible;
  }

}
