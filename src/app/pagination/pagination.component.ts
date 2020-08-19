import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent implements OnInit {
  active = 0;
  constructor() {}

  ngOnInit() {}

  move(input: number) {
    if (input === 0 && this.active > 0) this.active--;
    if (input === 1 && this.active < 2) this.active++;
  }
}
