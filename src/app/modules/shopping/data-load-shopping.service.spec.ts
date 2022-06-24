import { TestBed } from '@angular/core/testing';

import { DataLoadShoppingService } from './data-load-shopping.service';

describe('DataLoadShoppingService', () => {
  let service: DataLoadShoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadShoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
