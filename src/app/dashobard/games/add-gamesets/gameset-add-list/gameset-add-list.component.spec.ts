import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesetAddListComponent } from './gameset-add-list.component';

describe('GamesetAddListComponent', () => {
  let component: GamesetAddListComponent;
  let fixture: ComponentFixture<GamesetAddListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesetAddListComponent]
    });
    fixture = TestBed.createComponent(GamesetAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
