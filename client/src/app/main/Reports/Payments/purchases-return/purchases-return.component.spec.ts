import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesReturnComponent } from './purchases-return.component';

describe('PurchasesReturnComponent', () => {
  let component: PurchasesReturnComponent;
  let fixture: ComponentFixture<PurchasesReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
