import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinSimpleResponsiveBannerComponentComponent } from './vin-simple-responsive-banner-component.component';

describe('VinSimpleResponsiveBannerComponentComponent', () => {
  let component: VinSimpleResponsiveBannerComponentComponent;
  let fixture: ComponentFixture<VinSimpleResponsiveBannerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinSimpleResponsiveBannerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinSimpleResponsiveBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
