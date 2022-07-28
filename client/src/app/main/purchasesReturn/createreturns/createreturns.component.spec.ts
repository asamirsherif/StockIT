import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereturnsComponent } from './createreturns.component';

describe('CreatereturnsComponent', () => {
  let component: CreatereturnsComponent;
  let fixture: ComponentFixture<CreatereturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereturnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatereturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
