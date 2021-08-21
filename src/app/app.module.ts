import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteInfoComponent } from './qoute-info/qoute-info.component';
import { QouteComponent } from './qoute/qoute.component';

@NgModule({
  declarations: [
    AppComponent,
    QouteInfoComponent,
    QouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
