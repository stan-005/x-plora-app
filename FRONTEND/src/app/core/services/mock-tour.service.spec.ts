import { TestBed } from '@angular/core/testing';

import { MockTourService } from './mock-tour.service';

describe('MockTourService', () => {
  let service: MockTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
