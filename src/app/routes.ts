import EventDetailsComponent from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/event-list.component";
import { CreateEventComponent } from "./events/create-event.component";
import { NotFoundComponent } from "./errors/notFound.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";
import { CreateSessionComponent } from "./events/event-details/create-session.component";

export const appRoutes = [
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"],
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  {
    path: "events/session/new", component: CreateSessionComponent
  },
  { path: "404", component: NotFoundComponent },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  { path: "*", redirectTo: "/events" },
];
