import { TestBed } from '@angular/core/testing';

import { OnDevService } from './on-dev.service';

describe('OnDevService', () => {
  let service: OnDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
