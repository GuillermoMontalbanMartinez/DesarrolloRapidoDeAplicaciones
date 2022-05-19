import { TestBed } from '@angular/core/testing';

import { RoutinasServiceService } from './routinas-service.service';

describe('RoutinasServiceService', () => {
  let service: RoutinasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutinasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
