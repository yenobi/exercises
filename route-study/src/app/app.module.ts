import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

// should try in anouther file 
const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },

  // authentication demo
  // { path: 'login', component: LoginComponent },
  // {
  //   path: 'protected',
  //   component: ProtectedComponent,
  //   canActivate: [LoggedInGuard]
  // },

  // // nested 
  {
    path: 'products',
    component: ProductsComponent,
    // children: childRoutes
  }, 
  {path: 'product/:id', component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
