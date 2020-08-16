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
    const day = value.getDate();
    const month = monthNames[value.getMonth()];
    const year = value.getFullYear();
    return `${month} ${day} ${year}`;
  }
}
