import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateexpensesComponent } from './createexpenses.component';

describe('CreateexpensesComponent', () => {
  let component: CreateexpensesComponent;
  let fixture: ComponentFixture<CreateexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateexpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
