import { TestBed } from '@angular/core/testing';

import { DataLoadRentOwnerService } from './data-load-rent-owner.service';

describe('DataLoadRentOwnerService', () => {
  let service: DataLoadRentOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadRentOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
