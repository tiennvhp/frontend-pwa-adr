import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorConnectionPageMobileComponent } from './error-connection-page-mobile.component';

describe('ErrorConnectionPageMobileComponent', () => {
  let component: ErrorConnectionPageMobileComponent;
  let fixture: ComponentFixture<ErrorConnectionPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorConnectionPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorConnectionPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
