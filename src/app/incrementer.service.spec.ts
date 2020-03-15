import { TestBed } from '@angular/core/testing';

import { IncrementerService } from './incrementer.service';

describe('IncrementerService', () => {
  let service: IncrementerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
