import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangementSectionComponent } from './arrangement-section.component';

describe('ArrangementSectionComponent', () => {
  let component: ArrangementSectionComponent;
  let fixture: ComponentFixture<ArrangementSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangementSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
