import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableCreationComponent } from './table-creation/table-creation.component';
import { SearchPipe } from './table-creation/search.pipe';
import { SortingPipe } from './table-creation/sorting.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TableCreationComponent, SearchPipe, SortingPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
