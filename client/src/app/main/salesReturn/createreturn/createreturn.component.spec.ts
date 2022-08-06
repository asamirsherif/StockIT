import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereturnComponent } from './createreturn.component';

describe('CreatereturnComponent', () => {
  let component: CreatereturnComponent;
  let fixture: ComponentFixture<CreatereturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
