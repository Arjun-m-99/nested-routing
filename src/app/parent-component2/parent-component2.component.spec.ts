import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent2Component } from './parent-component2.component';

describe('ParentComponent2Component', () => {
  let component: ParentComponent2Component;
  let fixture: ComponentFixture<ParentComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
