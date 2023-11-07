import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesetAddCardComponent } from './gameset-add-card.component';

describe('GamesetAddCardComponent', () => {
  let component: GamesetAddCardComponent;
  let fixture: ComponentFixture<GamesetAddCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesetAddCardComponent]
    });
    fixture = TestBed.createComponent(GamesetAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
