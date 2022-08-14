import { TestBed } from '@angular/core/testing';

import { CategorytService } from './category.service';

describe('CategoryService', () => {
  let service: CategorytService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorytService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
