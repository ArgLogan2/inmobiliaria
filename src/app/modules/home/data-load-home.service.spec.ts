import { TestBed } from '@angular/core/testing';

import { DataLoadHomeService } from './data-load-home.service';

describe('DataLoadHomeService', () => {
  let service: DataLoadHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
