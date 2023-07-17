import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./event-list.component.html",
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private route: ActivatedRoute, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(event_name){
    this.toastrService.info(event_name);
  }

}
