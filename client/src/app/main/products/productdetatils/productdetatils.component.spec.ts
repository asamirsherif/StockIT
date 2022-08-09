import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetatilsComponent } from './productdetatils.component';

describe('ProductdetatilsComponent', () => {
  let component: ProductdetatilsComponent;
  let fixture: ComponentFixture<ProductdetatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
