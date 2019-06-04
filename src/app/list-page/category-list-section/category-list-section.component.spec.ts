import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListSectionComponent } from './category-list-section.component';

describe('CategoryListSectionComponent', () => {
  let component: CategoryListSectionComponent;
  let fixture: ComponentFixture<CategoryListSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
