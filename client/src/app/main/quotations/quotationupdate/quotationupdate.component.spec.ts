import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationupdateComponent } from './quotationupdate.component';

describe('QuotationupdateComponent', () => {
  let component: QuotationupdateComponent;
  let fixture: ComponentFixture<QuotationupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
