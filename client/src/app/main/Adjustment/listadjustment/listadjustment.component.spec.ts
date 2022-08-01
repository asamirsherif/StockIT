import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadjustmentComponent } from './listadjustment.component';

describe('ListadjustmentComponent', () => {
  let component: ListadjustmentComponent;
  let fixture: ComponentFixture<ListadjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadjustmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
