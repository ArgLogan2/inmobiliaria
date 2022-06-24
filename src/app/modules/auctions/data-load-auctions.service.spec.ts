import { TestBed } from '@angular/core/testing';

import { DataLoadAuctionsService } from './data-load-auctions.service';

describe('DataLoadAuctionsService', () => {
  let service: DataLoadAuctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadAuctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
