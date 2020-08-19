import { Component, OnInit } from "@angular/core";
import { LaunchService } from "./../launch.service";
import { Launch } from "./../launch";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent implements OnInit {
  active = 1;
  public nrOfFlights = 1;
  public pagination = [];
  constructor(private launchService: LaunchService) {}

  ngOnInit() {
    this.launchService.nrOfFlights.subscribe(item => {
      this.nrOfFlights = item;
      this.definePagination();
    });
  }

  move(input: number) {
    if (input === 0 && this.active > 1 && this.nrOfFlights >= this.active) this.active--;
    if (input === 1 && this.active < this.nrOfFlights && this.nrOfFlights >= this.active) this.active++;
    console.log(this.active);
    this.definePagination();
  }

  definePagination() {
    this.pagination = [];
    for (let i = this.active; i < this.nrOfFlights; i++) this.pagination.push(i);
    console.log(this.pagination)
  }
}
