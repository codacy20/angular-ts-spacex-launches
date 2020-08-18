import { Component, OnInit } from "@angular/core";

const data = [
  { id: 0, name: "This week" },
  { id: 0, name: "This month" },
  { id: 0, name: "Last 30 days" },
  { id: 0, name: "All time" }
];

@Component({
  selector: "app-drop-down",
  templateUrl: "./drop-down.component.html",
  styleUrls: ["./drop-down.component.css"]
})
export class DropDownComponent implements OnInit {
  public active = false;

  public data = data;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.active = !this.active;
  }

  clicked(input: number) {
    console.log(input);
  }
}
