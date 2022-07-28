import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnlistComponent } from './returnlist.component';

describe('ReturnlistComponent', () => {
  let component: ReturnlistComponent;
  let fixture: ComponentFixture<ReturnlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
