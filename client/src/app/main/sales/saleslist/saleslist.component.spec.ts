import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleslistComponent } from './saleslist.component';

describe('SaleslistComponent', () => {
  let component: SaleslistComponent;
  let fixture: ComponentFixture<SaleslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
