import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantPageMobileComponent } from './merchant-page-mobile.component';

describe('MerchantPageMobileComponent', () => {
  let component: MerchantPageMobileComponent;
  let fixture: ComponentFixture<MerchantPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
