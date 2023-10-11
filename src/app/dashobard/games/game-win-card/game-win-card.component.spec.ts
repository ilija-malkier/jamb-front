import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWinCardComponent } from './game-win-card.component';

describe('WinCardComponent', () => {
  let component: GameWinCardComponent;
  let fixture: ComponentFixture<GameWinCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameWinCardComponent]
    });
    fixture = TestBed.createComponent(GameWinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
