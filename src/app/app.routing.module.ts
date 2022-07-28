import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent1Component } from './parent-component1/child-component1/child-component1.component';
import { ChildComponent2Component } from './parent-component1/child-component2/child-component2.component';
import { ChildComponent3Component } from './parent-component1/child-component3/child-component3.component';
import { ParentComponent1Component } from './parent-component1/parent-component1.component';
import { ParentComponent2Component } from './parent-component2/parent-component2.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'pc1', component: ParentComponent1Component,
    children: [
      { path: 'child1', component: ChildComponent1Component },
      { path: 'child2', component: ChildComponent2Component },
      { path: 'child3', component: ChildComponent3Component },
      { path: '**', component: ChildComponent1Component },

    ]
  },
  {
    path: 'pc2', component: ParentComponent2Component,
    loadChildren: () =>
      import("./parent-component2/parent-component2.module").then((m) => m.ParentComponent2Module),
  },
  { path: '**', component: ParentComponent1Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
