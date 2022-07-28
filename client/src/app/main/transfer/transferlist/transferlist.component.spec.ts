import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferlistComponent } from './transferlist.component';

describe('TransferlistComponent', () => {
  let component: TransferlistComponent;
  let fixture: ComponentFixture<TransferlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
