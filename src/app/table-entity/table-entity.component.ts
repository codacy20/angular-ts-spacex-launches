import { Component, OnInit } from "@angular/core";
import { LaunchService } from "./../launch.service";
import { Launch } from "./../launch";

@Component({
  selector: "app-table-entity",
  templateUrl: "./table-entity.component.html",
  styleUrls: ["./table-entity.component.css"]
})
export class TableEntityComponent implements OnInit {
  data: Launch[] = [];
  offset = 0;
  limit = 5;
  active = null;
  constructor(private launchService: LaunchService) {}

  ngOnInit() {
    const res = this.launchService.getLaunchList(this.offset, this.limit);
    res.subscribe((data: Launch[]) => {
      this.data = data;
      this.launchService.nrOfFlights.next(this.data[0].flight_number);
    });
    this.launchService.data.subscribe(item => {
      this.data = item;
    });
  }

  mouseEnter(input : any){
      this.active = input;
   }

   mouseLeave(input : any){
      this.active = null;     
   }
}
