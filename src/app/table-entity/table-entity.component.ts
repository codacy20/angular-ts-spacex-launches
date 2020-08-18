import { Component, OnInit } from "@angular/core";
import { RocketService } from "./../rocket.service";
import { Rocket } from "./../rocket";

@Component({
  selector: "app-table-entity",
  templateUrl: "./table-entity.component.html",
  styleUrls: ["./table-entity.component.css"]
})
export class TableEntityComponent implements OnInit {
  data: Rocket[] = [];
  constructor(private capsulesService: RocketService) {}

  ngOnInit() {
    const res = this.capsulesService.getCapsulesList();
    res.subscribe((data: Rocket[]) => {
      this.data = data;
    });
  }
}
