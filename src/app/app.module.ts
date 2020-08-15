import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableEntityComponent } from './table-entity/table-entity.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DateTimePipe } from './date-time.pipe';
import { UserServiceService } from './user-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TableComponent, FilterComponent, TableHeaderComponent, TableEntityComponent, PaginationComponent, DateTimePipe ],
  bootstrap:    [ AppComponent ],
  providers: [UserServiceService]
})
export class AppModule { }
