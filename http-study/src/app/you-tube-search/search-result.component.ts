import { Component, OnInit, Input } from '@angular/core';

import { SearchResult } from './search-result.model';

@Component({
  selector: 'app-search-result',
  template: `
  <div>
    <div class="thumbnail">
      <img src="{{result.thumbnailUrl}}">
      <div class="caption">
        <h3>{{result.title}}</h3>
        <p>{{result.description}}</p>
        <p>
          <a href="{{result.videoUrl}}" role="button">Watch</a>
        </p>
      </div>
    </div>
  </div>
  `
})
export class SearchResultComponent implements OnInit {
  @Input() result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
