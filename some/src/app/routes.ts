import { Routes } from '@angular/router'
import { EventListComponent } from './event-list/event-list.component'
import { EventDetailsComponent } from './event-details/event-details.component'
import { CreateEventComponent } from './create-event/create-event.component'
import { ErrorComponent } from './error/error.component'
import { EventRouteActivatorService } from './shared/event-route-activator.service'
import { EventListResolverService } from './shared/event-list-resolver.service'


export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: { events: EventListResolverService}},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    { path: '404', component: ErrorComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]