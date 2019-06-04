import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPageMobileComponent } from './department-page-mobile.component';

describe('DepartmentPageMobileComponent', () => {
  let component: DepartmentPageMobileComponent;
  let fixture: ComponentFixture<DepartmentPageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentPageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
