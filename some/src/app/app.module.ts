import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavComponent } from './nav/nav.component';
import { EventStorageService } from './shared/event-storage.service';
import { EventRouteActivatorService } from './shared/event-route-activator.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventListResolverService } from './shared/event-list-resolver.service';
import {EventThumbnailComponent} from './event-thumbnail/event-thumbnail.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateSessionComponent } from './event-details/create-session/create-session.component';
import { SessionListComponent } from './event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import {JQ_TOKEN} from './common/jQuery.service';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

// todo: try to fix toastr with export decalare
// declare let toastr: IToastr;
export declare let jQuery: any;

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    EventThumbnailComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventStorageService,
    // { provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    EventRouteActivatorService,
    EventListResolverService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty) {
    return window.confirm('You have not saves this event! Do you really want to cance?');
  }
  return true;
}
