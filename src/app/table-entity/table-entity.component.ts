import { Component, OnInit } from "@angular/core";
import { CapsulesServiceService } from "./../user-service.service";
import { Capsules } from "./../capsules";

@Component({
  selector: "app-table-entity",
  templateUrl: "./table-entity.component.html",
  styleUrls: ["./table-entity.component.css"]
})
export class TableEntityComponent implements OnInit {
  data: Capsules[] = [];
  constructor(private capsulesService: CapsulesServiceService) {}

  ngOnInit() {
    const res = this.capsulesService.getCapsulesList();
    res.subscribe((data: Capsules[]) => {
      this.data = data;
    });
  }
}
