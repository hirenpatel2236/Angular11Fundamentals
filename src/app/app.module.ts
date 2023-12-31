import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import EventDetailsComponent from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { NotFoundComponent } from './errors/notFound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellCompoenent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/jQuery.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellCompoenent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery},
    {provide: "canDeactivateCreateEvent", useValue: checkDirtyState}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}