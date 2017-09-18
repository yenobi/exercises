import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

// const routes: Routes = [
//   {path: ''}
// ]

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route})
  }

  consoleRouteParam(route: ActivatedRoute): void {
    console.log(this.route.params);
  }

}

// export class ProductComponent {
//   id: string;

//   constructor(private route: ActivatedRoute) {
//     route.params.subscribe(params => { this.id = params['id']; });
//   }
// }