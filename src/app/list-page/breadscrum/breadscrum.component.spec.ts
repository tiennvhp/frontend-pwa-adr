import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadscrumComponent } from './breadscrum.component';

describe('BreadscrumComponent', () => {
  let component: BreadscrumComponent;
  let fixture: ComponentFixture<BreadscrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadscrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadscrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
