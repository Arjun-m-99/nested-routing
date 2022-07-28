import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ParentComponent1Component } from './parent-component1/parent-component1.component';
import { ParentComponent2Component } from './parent-component2/parent-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent1Component,
    ParentComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
