import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Launch } from "./launch";
@Injectable()
export class LaunchService {
  constructor(private http: HttpClient) {}
  path: string = "https://api.spacexdata.com/v3/launches?";
  list: Launch[] = [];

  getLaunchList(offset: number, limit: number) {
    return this.http.get<Launch[]>(
      this.path + `offset=${offset}&limit=${limit}`
    );
  }
}
