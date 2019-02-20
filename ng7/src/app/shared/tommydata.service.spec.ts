import { TestBed } from '@angular/core/testing';

import { TommydataService } from './tommydata.service';

describe('TommydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TommydataService = TestBed.get(TommydataService);
    expect(service).toBeTruthy();
  });
});
