import { TestBed } from '@angular/core/testing';

import { AddproductService } from './addproduct.service';

describe('AddproductService', () => {
  let service: AddproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
