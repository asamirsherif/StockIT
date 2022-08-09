import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesupdateComponent } from './salesupdate.component';

describe('SalesupdateComponent', () => {
  let component: SalesupdateComponent;
  let fixture: ComponentFixture<SalesupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
