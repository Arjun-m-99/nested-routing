import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ParentComponent1Component } from './parent-component1/parent-component1.component';
import { ParentComponent2Component } from './parent-component2/parent-component2.component';
import { ChildComponent1Component } from './parent-component1/child-component1/child-component1.component';
import { ChildComponent2Component } from './parent-component1/child-component2/child-component2.component';
import { ChildComponent3Component } from './parent-component1/child-component3/child-component3.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent1Component,
    ParentComponent2Component,
    ChildComponent1Component,
    ChildComponent2Component,
    ChildComponent3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
