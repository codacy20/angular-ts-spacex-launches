import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Capsules } from "./capsules";
@Injectable()
export class CapsulesServiceService {
  constructor(private http: HttpClient) {}
  path: string = "https://api.spacexdata.com/v3/capsules";
  list: Capsules[] = [];

  getCapsulesList() {
    return this.http.get<Capsules[]>(this.path);
  }
}
