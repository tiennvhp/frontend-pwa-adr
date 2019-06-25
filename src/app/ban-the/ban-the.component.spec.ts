import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanTheComponent } from './ban-the.component';

describe('BanTheComponent', () => {
  let component: BanTheComponent;
  let fixture: ComponentFixture<BanTheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanTheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanTheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
