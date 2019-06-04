import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPromote1Component } from './list-promote1.component';

describe('ListPromote1Component', () => {
  let component: ListPromote1Component;
  let fixture: ComponentFixture<ListPromote1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPromote1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPromote1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
