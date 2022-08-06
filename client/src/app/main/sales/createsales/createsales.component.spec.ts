import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesalesComponent } from './createsales.component';

describe('CreatesalesComponent', () => {
  let component: CreatesalesComponent;
  let fixture: ComponentFixture<CreatesalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
