import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseslistComponent } from './purchaseslist.component';

describe('PurchaseslistComponent', () => {
  let component: PurchaseslistComponent;
  let fixture: ComponentFixture<PurchaseslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
