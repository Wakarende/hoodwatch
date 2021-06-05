import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NeighbourhoodComponent } from './component/neighbourhood/neighbourhood.component';

@NgModule({
  declarations: [
    AppComponent,
    NeighbourhoodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
