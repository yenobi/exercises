import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';

import { EventStorageService } from './shared/event-storage.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventStorageService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
