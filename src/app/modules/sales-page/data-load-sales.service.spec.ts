import { TestBed } from '@angular/core/testing';

import { DataLoadSalesService } from './data-load-sales.service';

describe('DataLoadSalesService', () => {
  let service: DataLoadSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
