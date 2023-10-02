import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGamesComponent } from './filter-games.component';

describe('FilterGamesComponent', () => {
  let component: FilterGamesComponent;
  let fixture: ComponentFixture<FilterGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterGamesComponent]
    });
    fixture = TestBed.createComponent(FilterGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
