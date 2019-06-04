import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRefinementComponentComponent } from './product-refinement-component.component';

describe('ProductRefinementComponentComponent', () => {
  let component: ProductRefinementComponentComponent;
  let fixture: ComponentFixture<ProductRefinementComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRefinementComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRefinementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
