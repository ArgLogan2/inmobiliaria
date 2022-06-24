import { TestBed } from '@angular/core/testing';

import { DataLoadAppraisalsService } from './data-load-appraisals.service';

describe('DataLoadAppraisalsService', () => {
  let service: DataLoadAppraisalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadAppraisalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
