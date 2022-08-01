import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadjustmentComponent } from './createadjustment.component';

describe('CreateadjustmentComponent', () => {
  let component: CreateadjustmentComponent;
  let fixture: ComponentFixture<CreateadjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateadjustmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
