import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetransferComponent } from './updatetransfer.component';

describe('UpdatetransferComponent', () => {
  let component: UpdatetransferComponent;
  let fixture: ComponentFixture<UpdatetransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
