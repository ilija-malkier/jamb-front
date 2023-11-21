import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesetAddCardNoneComponent } from './gameset-add-card-none.component';

describe('GamesetAddCardNoneComponent', () => {
  let component: GamesetAddCardNoneComponent;
  let fixture: ComponentFixture<GamesetAddCardNoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesetAddCardNoneComponent]
    });
    fixture = TestBed.createComponent(GamesetAddCardNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
