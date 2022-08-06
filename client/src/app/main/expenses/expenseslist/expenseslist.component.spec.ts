import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseslistComponent } from './expenseslist.component';

describe('ExpenseslistComponent', () => {
  let component: ExpenseslistComponent;
  let fixture: ComponentFixture<ExpenseslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
