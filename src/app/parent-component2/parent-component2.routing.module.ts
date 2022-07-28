import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildComponent1Component } from "../parent-component2/child-component1/child-component1.component";
import { ChildComponent2Component } from "../parent-component2/child-component2/child-component2.component";
import { ChildComponent3Component } from "../parent-component2/child-component3/child-component3.component";

const routes: Routes=[
    //{ path: '',redirectTo:'profile1',pathMatch:'full'},
    { path: 'child1', component: ChildComponent1Component, },
    { path: 'child2', component: ChildComponent2Component },
    { path: 'child3', component: ChildComponent3Component },
    
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ParentComponent2RoutingModule{}