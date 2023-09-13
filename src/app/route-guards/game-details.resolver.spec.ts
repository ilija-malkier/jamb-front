import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { GameDetailsResolver } from './game-details-resolver.service';

describe('gameDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => GameDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
