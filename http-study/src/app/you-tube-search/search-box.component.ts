import { Component, OnInit, Output, EventEmitter, ElementRef, } from '@angular/core';

// if many rxjs methods -> better import all rxjs 
import { Observable } from 'rxjs';
// alternative of partly importing - just for example 
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';

import { SearchResult } from './search-result.model';
import { YouTubeSearchService } from './you-tube-search.service';

@Component({
  selector: 'app-search-box',
  template: `
    <input type="text" placeholder="Search" autofocus>
  `
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(
    private youtube: YouTubeSearchService,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.emit(true))
      .map((query: string) => this.youtube.search(query))
      .switch()
      .subscribe(
        (res: SearchResult[]) => {
          this.loading.emit(false);
          this.results.emit(res);
        },
        (err: any) => {
          console.log(`error is ${err}`);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }

}
