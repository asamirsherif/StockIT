import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepermissionComponent } from './createpermission.component';

describe('CreatepermissionComponent', () => {
  let component: CreatepermissionComponent;
  let fixture: ComponentFixture<CreatepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
