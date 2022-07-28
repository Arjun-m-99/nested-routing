import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ParentComponent1Component } from './parent-component1/parent-component1.component';
import { ParentComponent2Component } from './parent-component2/parent-component2.component';

const routes: Routes = [
  {path : '', component : AppComponent},
  {path : 'pc1', component : ParentComponent1Component},
  {path : 'pc2', component : ParentComponent2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
