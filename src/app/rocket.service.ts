import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Rocket } from "./rocket";
@Injectable()
export class RocketService {
  constructor(private http: HttpClient) {}
  path: string = "https://api.spacexdata.com/v3/rockets";
  list: Rocket[] = [];

  getCapsulesList() {
    return this.http.get<Rocket[]>(this.path);
  }
}
