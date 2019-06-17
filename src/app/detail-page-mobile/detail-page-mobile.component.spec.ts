import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPageMobileComponent } from './detail-page-mobile.component';

describe('DetailPageMobileComponent', () => {
  let component: DetailPageMobileComponent;
  let fixture: ComponentFixture<DetailPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
