import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductquantityComponent } from './prductquantity.component';

describe('PrductquantityComponent', () => {
  let component: PrductquantityComponent;
  let fixture: ComponentFixture<PrductquantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrductquantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrductquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
