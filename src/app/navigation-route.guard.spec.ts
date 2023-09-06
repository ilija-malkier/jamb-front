import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { navigationRouteGuard } from './navigation-route.guard';

describe('navigationRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => navigationRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
