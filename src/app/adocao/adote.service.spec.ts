import { TestBed } from '@angular/core/testing';

import { AdoteService } from './adote.service';

describe('AdoteService', () => {
  let service: AdoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
