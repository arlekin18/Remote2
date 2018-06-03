import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PresenterComponent } from './presenter/presenter.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { BaseService } from './base.service';


@NgModule({
  declarations: [
    AppComponent,
    PresenterComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
