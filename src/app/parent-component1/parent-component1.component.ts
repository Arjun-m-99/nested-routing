import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component1',
  templateUrl: './parent-component1.component.html',
  styleUrls: ['./parent-component1.component.css']
})
export class ParentComponent1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("From Component 1")
  }

}
