import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSetDetailsComponent } from './game-set-details.component';

describe('GameSetDetailsComponentComponent', () => {
  let component: GameSetDetailsComponent;
  let fixture: ComponentFixture<GameSetDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameSetDetailsComponent]
    });
    fixture = TestBed.createComponent(GameSetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
