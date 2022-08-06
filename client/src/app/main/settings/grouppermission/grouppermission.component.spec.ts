import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouppermissionComponent } from './grouppermission.component';

describe('GrouppermissionComponent', () => {
  let component: GrouppermissionComponent;
  let fixture: ComponentFixture<GrouppermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrouppermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouppermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
