import { TestBed } from '@angular/core/testing';

import { AddbrandService } from './addbrand.service';

describe('AddbrandService', () => {
  let service: AddbrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddbrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
