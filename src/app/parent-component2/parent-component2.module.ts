import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent1Component } from './child-component1/child-component1.component';
import { ChildComponent2Component } from './child-component2/child-component2.component';
import { ChildComponent3Component } from './child-component3/child-component3.component';



@NgModule({
  declarations: [
    ChildComponent1Component,
    ChildComponent2Component,
    ChildComponent3Component
  ],
  imports: [
    CommonModule
  ]
})
export class ParentComponent2Module { }
