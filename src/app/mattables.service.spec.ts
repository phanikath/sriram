import { TestBed } from '@angular/core/testing';

import { MattablesService } from './mattables.service';

describe('MattablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MattablesService = TestBed.get(MattablesService);
    expect(service).toBeTruthy();
  });
});
