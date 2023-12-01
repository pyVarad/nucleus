import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NucleusComponentLibraryModule } from 'nucleus-ng-component-library';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NucleusComponentLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
