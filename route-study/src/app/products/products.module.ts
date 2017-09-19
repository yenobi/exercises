import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from '../product/product.component';
import { MainComponent } from './main/main.component';
import { MoreInfoComponent } from './more-info/more-info.component';

import { ProductsComponent } from '../products/products.component';

export const childRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'more-info', component: MoreInfoComponent},
  {path: ':id', component: ProductComponent}
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent,
    MoreInfoComponent
  ],
  bootstrap: [ProductsComponent]

})
export class ProductsModule { }
