import { TestBed } from '@angular/core/testing';

import { APISERVICIOService } from './apiservicio.service';

describe('APISERVICIOService', () => {
  let service: APISERVICIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APISERVICIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
