import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationslistComponent } from './quotationslist.component';

describe('QuotationslistComponent', () => {
  let component: QuotationslistComponent;
  let fixture: ComponentFixture<QuotationslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
