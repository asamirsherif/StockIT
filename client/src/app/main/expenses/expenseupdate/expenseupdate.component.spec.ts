import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseupdateComponent } from './expenseupdate.component';



describe('ExpenseupdateComponent', () => {
  let component: ExpenseupdateComponent;
  let fixture: ComponentFixture<ExpenseupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
