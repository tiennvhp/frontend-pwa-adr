import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageMobileComponent } from './list-page-mobile.component';

describe('ListPageMobileComponent', () => {
  let component: ListPageMobileComponent;
  let fixture: ComponentFixture<ListPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
