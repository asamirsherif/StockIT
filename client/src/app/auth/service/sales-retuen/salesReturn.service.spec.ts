import { TestBed } from '@angular/core/testing';

import { SaleReturnService } from './salesReturn.service';

describe('SaleService', () => {
  let service: SaleReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
