import { TestBed } from '@angular/core/testing';

import { SharevaluesService } from './sharevalues.service';

describe('SharevaluesService', () => {
  let service: SharevaluesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharevaluesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
