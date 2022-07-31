import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsettingComponent } from './systemsetting.component';

describe('SystemsettingComponent', () => {
  let component: SystemsettingComponent;
  let fixture: ComponentFixture<SystemsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
