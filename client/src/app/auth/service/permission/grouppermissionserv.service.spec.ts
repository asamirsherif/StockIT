import { TestBed } from '@angular/core/testing';

import { GrouppermissionservService } from './grouppermissionserv.service';

describe('GrouppermissionservService', () => {
  let service: GrouppermissionservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrouppermissionservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
