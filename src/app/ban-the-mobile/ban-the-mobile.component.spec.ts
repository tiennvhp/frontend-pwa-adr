import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanTheMobileComponent } from './ban-the-mobile.component';

describe('BanTheMobileComponent', () => {
  let component: BanTheMobileComponent;
  let fixture: ComponentFixture<BanTheMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanTheMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanTheMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
