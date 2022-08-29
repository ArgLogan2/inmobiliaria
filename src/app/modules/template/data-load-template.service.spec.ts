import { TestBed } from '@angular/core/testing';

import { DataLoadTemplateService } from './data-load-template.service';

describe('DataLoadTemplateService', () => {
  let service: DataLoadTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
