import { TestBed } from '@angular/core/testing';

import { WarehousservService } from './warehousserv.service';

describe('WarehousservService', () => {
  let service: WarehousservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehousservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
