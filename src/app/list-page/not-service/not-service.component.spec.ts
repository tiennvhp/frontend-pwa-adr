import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotServiceComponent } from './not-service.component';

describe('NotServiceComponent', () => {
  let component: NotServiceComponent;
  let fixture: ComponentFixture<NotServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
