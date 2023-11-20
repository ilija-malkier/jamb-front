import { TestBed } from '@angular/core/testing';

import { DraftGameService } from './draft-game.service';

describe('DraftGameService', () => {
  let service: DraftGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
