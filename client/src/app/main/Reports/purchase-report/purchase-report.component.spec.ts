import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReportComponent } from './purchase-report.component';

describe('PurchaseReportComponent', () => {
  let component: PurchaseReportComponent;
  let fixture: ComponentFixture<PurchaseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
