import { TestBed } from '@angular/core/testing';

import { SaleSearchService } from './sale-search.service';

describe('SalesProductSearchService', () => {
    let service: SaleSearchService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(SaleSearchService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });