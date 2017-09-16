import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        console.log(res);
        this.data = res.json();
        this.loading = false;
      })
  }

}

// http.request returns an Observable.We can subscribe to changes (akin to using then from a Promise) using subscribe.

// extract data from json response -> res.json();
// res.json() works with body field of response - is it from Response object of observarble ? 

// When our http.request returns (from the server) the stream will emit a Response object

// .subscribe can also handle failures and stream completion by passing a function to the
// second and third arguments respectively.In a production app it would be a good idea to
// handle those cases, too.That is, this.loading should also be set to false if the request
// fails(i.e.the stream emits an error).