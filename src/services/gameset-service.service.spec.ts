import { TestBed } from '@angular/core/testing';

import { GamesetService } from './gameset.service';

describe('GamesetServiceService', () => {
  let service: GamesetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
