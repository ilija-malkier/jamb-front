import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesetPaginationComponent } from './gameset-pagination.component';

describe('GamesetPaginationComponent', () => {
  let component: GamesetPaginationComponent;
  let fixture: ComponentFixture<GamesetPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesetPaginationComponent]
    });
    fixture = TestBed.createComponent(GamesetPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
