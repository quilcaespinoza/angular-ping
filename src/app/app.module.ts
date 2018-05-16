import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import {jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

import { AppComponent } from './app.component';
import { PingService } from './shared/ping.service';


@NgModule({
  declarations: [
    AppComponent,
      jqxChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
