import { TestBed } from '@angular/core/testing';

import { RoutinesService } from './routines-service.service';

describe('RoutinesService', () => {
  let service: RoutinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
