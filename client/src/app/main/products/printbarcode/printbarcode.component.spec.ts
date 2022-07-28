import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintbarcodeComponent } from './printbarcode.component';

describe('PrintbarcodeComponent', () => {
  let component: PrintbarcodeComponent;
  let fixture: ComponentFixture<PrintbarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintbarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintbarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
