import { TestBed } from '@angular/core/testing';

import { JobStatusService } from './job-status.service';

describe('JobStatusService', () => {
  let service: JobStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
