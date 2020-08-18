import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";
import { FilterComponent } from "./filter/filter.component";
import { TableHeaderComponent } from "./table-header/table-header.component";
import { TableEntityComponent } from "./table-entity/table-entity.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { DateTimePipe } from "./date-time.pipe";
import { RocketService } from "./rocket.service";
import { DropDownComponent } from "./drop-down/drop-down.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    TableComponent,
    FilterComponent,
    TableHeaderComponent,
    TableEntityComponent,
    PaginationComponent,
    DateTimePipe,
    DropDownComponent
  ],
  bootstrap: [AppComponent],
  providers: [RocketService]
})
export class AppModule {}
