import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent1Component } from './parent-component1.component';

describe('ParentComponent1Component', () => {
  let component: ParentComponent1Component;
  let fixture: ComponentFixture<ParentComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
