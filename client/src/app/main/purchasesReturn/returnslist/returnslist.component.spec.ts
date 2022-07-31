import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnslistComponent } from './returnslist.component';

describe('ReturnslistComponent', () => {
  let component: ReturnslistComponent;
  let fixture: ComponentFixture<ReturnslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
