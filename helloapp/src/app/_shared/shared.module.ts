import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    // FooterComponent,
    // HeaderComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
