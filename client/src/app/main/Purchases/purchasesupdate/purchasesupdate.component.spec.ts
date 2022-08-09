import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesupdateComponent } from './purchasesupdate.component';

describe('PurchasesupdateComponent', () => {
  let component: PurchasesupdateComponent;
  let fixture: ComponentFixture<PurchasesupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
