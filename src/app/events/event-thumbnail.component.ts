import { Component, Input } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
      .green {
        color: #1edc1e !important;
      }
      .bold {
        font-weight: bold;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeColor() {
    const isEarlyStart = this.event && this.event.time === "8:00 am";

    // One way, return object
    //return {green: isEarlyStart, bold: isEarlyStart};

    // Second way, return string
    // if(isEarlyStart)
    //   return "green bold";
    // return "";

    // Third way, return array
    if (isEarlyStart) return ["green", "bold"];
    return [];
  }

  getStartTimeStyle(){
    const isEarlyStart = this.event && this.event.time === "8:00 am";

    return {'color': isEarlyStart ? '#003300' : '#bbb', 'font-weight': isEarlyStart ? 'bold': 'normal'};
  }
}
