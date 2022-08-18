import { TestBed } from '@angular/core/testing';

import { SupplierservService } from './supplierserv.service';

describe('SupplierservService', () => {
  let service: SupplierservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
