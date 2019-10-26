import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnumselectioncontrolsModule } from 'enumselectioncontrols/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EnumselectioncontrolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
