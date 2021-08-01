import { TestBed } from '@angular/core/testing';

import { TestLibraryForTestingService } from './test-library-for-testing.service';

describe('TestLibraryForTestingService', () => {
  let service: TestLibraryForTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLibraryForTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
