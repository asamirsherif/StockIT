import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierlistComponent } from './supplierlist.component';

describe('SupplierlistComponent', () => {
  let component: SupplierlistComponent;
  let fixture: ComponentFixture<SupplierlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
