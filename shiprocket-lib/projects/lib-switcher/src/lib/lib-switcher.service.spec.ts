import { TestBed } from '@angular/core/testing';

import { LibSwitcherService } from './lib-switcher.service';

describe('LibSwitcherService', () => {
  let service: LibSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
