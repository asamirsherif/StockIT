import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnComponent } from './sales-return.component';

describe('SalesReturnComponent', () => {
  let component: SalesReturnComponent;
  let fixture: ComponentFixture<SalesReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
