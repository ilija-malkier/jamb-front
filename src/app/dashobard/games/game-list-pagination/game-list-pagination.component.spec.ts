import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListPaginationComponent } from './game-list-pagination.component';

describe('GameListPaginationComponent', () => {
  let component: GameListPaginationComponent;
  let fixture: ComponentFixture<GameListPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameListPaginationComponent]
    });
    fixture = TestBed.createComponent(GameListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
