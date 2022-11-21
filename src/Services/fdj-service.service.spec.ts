import { TestBed } from '@angular/core/testing';

import { FdjServiceService } from './fdj-service.service';

describe('FdjServiceService', () => {
  let service: FdjServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdjServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
