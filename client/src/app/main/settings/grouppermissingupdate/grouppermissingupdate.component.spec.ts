import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouppermissingupdateComponent } from './grouppermissingupdate.component';

describe('GrouppermissingupdateComponent', () => {
  let component: GrouppermissingupdateComponent;
  let fixture: ComponentFixture<GrouppermissingupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrouppermissingupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouppermissingupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
