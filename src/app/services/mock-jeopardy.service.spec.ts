import { TestBed } from '@angular/core/testing';

import { MockJeopardyService } from './mock-jeopardy.service';

describe('MockJeopardyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockJeopardyService = TestBed.get(MockJeopardyService);
    expect(service).toBeTruthy();
  });
});
