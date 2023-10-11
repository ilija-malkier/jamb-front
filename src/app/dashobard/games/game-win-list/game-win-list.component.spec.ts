import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWinListComponent } from './game-win-list.component';

describe('WinListComponent', () => {
  let component: GameWinListComponent;
  let fixture: ComponentFixture<GameWinListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameWinListComponent]
    });
    fixture = TestBed.createComponent(GameWinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
