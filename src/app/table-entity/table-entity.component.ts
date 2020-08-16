import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "./../user-service.service";
import { User } from "./../user";

const data: User[] = [
  {
    id: 0,
    name: "temp",
    createdAt: new Date()
  },
  {
    id: 0,
    name: "temp",
    createdAt: new Date()
  },
  {
    id: 0,
    name: "temp",
    createdAt: new Date()
  },
  {
    id: 0,
    name: "temp",
    createdAt: new Date()
  },
  {
    id: 0,
    name: "temp",
    createdAt: new Date()
  }
];

@Component({
  selector: "app-table-entity",
  templateUrl: "./table-entity.component.html",
  styleUrls: ["./table-entity.component.css"]
})
export class TableEntityComponent implements OnInit {
  data = data;
  constructor(private userService: UserServiceService) {
    // this.userService.getUsersList();
  }

  ngOnInit() {}
}
