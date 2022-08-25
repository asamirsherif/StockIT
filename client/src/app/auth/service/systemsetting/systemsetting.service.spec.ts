import { TestBed } from '@angular/core/testing';

import { SystemsettingService } from './systemsetting.service';

describe('SystemsettingService', () => {
  let service: SystemsettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemsettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
