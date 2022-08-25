import { TestBed } from '@angular/core/testing';

import { UserservService } from './userserv.service';

describe('UserservService', () => {
  let service: UserservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
