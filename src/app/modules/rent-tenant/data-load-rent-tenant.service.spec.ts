import { TestBed } from '@angular/core/testing';

import { DataLoadRentTenantService } from './data-load-rent-tenant.service';

describe('DataLoadRentTenantService', () => {
  let service: DataLoadRentTenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadRentTenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
