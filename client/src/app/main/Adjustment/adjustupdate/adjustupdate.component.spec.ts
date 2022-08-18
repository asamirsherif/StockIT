import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustupdateComponent } from './adjustupdate.component';

describe('AdjustupdateComponent', () => {
  let component: AdjustupdateComponent;
  let fixture: ComponentFixture<AdjustupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjustupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
