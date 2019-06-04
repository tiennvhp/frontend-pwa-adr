import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundCategoryComponent } from './not-found-category.component';

describe('NotFoundCategoryComponent', () => {
  let component: NotFoundCategoryComponent;
  let fixture: ComponentFixture<NotFoundCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
