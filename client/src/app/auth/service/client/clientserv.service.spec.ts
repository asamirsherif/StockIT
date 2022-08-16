import { TestBed } from '@angular/core/testing';

import { ClientservService } from './clientserv.service';

describe('ClientservService', () => {
  let service: ClientservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
