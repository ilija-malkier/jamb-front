import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHistoryCard } from './game-history-card.component';

describe('GameComponent', () => {
  let component: GameHistoryCard;
  let fixture: ComponentFixture<GameHistoryCard>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameHistoryCard]
    });
    fixture = TestBed.createComponent(GameHistoryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
