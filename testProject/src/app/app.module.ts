import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { StyleVarsComponent } from './style-vars/style-vars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // StyleVarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
