import { TestBed } from '@angular/core/testing';

import { UnitservService } from './unitserv.service';

describe('UnitservService', () => {
  let service: UnitservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
