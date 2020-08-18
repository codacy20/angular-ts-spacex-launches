import { Pipe, PipeTransform } from "@angular/core";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

@Pipe({
  name: "dateTime"
})
export class DateTimePipe implements PipeTransform {
  transform(value: Date, args?: any): any {
    if (value != null) {
      const date = new Date(value);
      const day = date.getDate();
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      return `${month} ${day} ${year}`;
    } else return null;
  }
}
