import { TestBed } from '@angular/core/testing';

import { ExaServiceService } from './exa-service.service';

describe('ExaServiceService', () => {
  let service: ExaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
