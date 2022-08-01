import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetransferComponent } from './createtransfer.component';

describe('CreatetransferComponent', () => {
  let component: CreatetransferComponent;
  let fixture: ComponentFixture<CreatetransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
