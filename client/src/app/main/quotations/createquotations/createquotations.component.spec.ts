import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatequotationsComponent } from './createquotations.component';

describe('CreatequotationsComponent', () => {
  let component: CreatequotationsComponent;
  let fixture: ComponentFixture<CreatequotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatequotationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatequotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
