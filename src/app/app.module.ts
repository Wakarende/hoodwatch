import { HttpClientModule } from '@angular/common/http';
import { NeighbourhoodService } from './services/hood/neighbourhood.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';


@NgModule({
  declarations: [
    AppComponent,
    NeighbourhoodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NeighbourhoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
