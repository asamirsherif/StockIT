import { TestBed } from '@angular/core/testing';

import { AdjustmentservService } from './adjustmentserv.service';

describe('AdjustmentservService', () => {
  let service: AdjustmentservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdjustmentservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
