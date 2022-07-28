import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepurchasesComponent } from './createpurchases.component';

describe('CreatepurchasesComponent', () => {
  let component: CreatepurchasesComponent;
  let fixture: ComponentFixture<CreatepurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepurchasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
