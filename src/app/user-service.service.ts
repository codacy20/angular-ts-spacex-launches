import { Injectable } from "@angular/core";
import { Got } from "got";

@Injectable()
export class UserServiceService {
  constructor() {}
  // constructor(public got: Got) {}

  // getUsersList() {
  //   (async () => {
  //     try {
  //       const response = await this.got.get("https://sindresorhus.com");
  //       console.log(response);
  //       //=> '<!doctype html> ...'
  //     } catch (error) {
  //       console.log(error.response.body);
  //       //=> 'Internal server error ...'
  //     }
  //   })();
  // }
}
