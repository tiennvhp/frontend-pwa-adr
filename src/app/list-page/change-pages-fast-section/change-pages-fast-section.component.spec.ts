import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePagesFastComponent } from './change-pages-fast.component';

describe('ChangePagesFastComponent', () => {
  let component: ChangePagesFastComponent;
  let fixture: ComponentFixture<ChangePagesFastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePagesFastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePagesFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
