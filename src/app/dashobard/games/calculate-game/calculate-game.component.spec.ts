import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateGameComponent } from './calculate-game.component';

describe('CalculateGameComponent', () => {
  let component: CalculateGameComponent;
  let fixture: ComponentFixture<CalculateGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateGameComponent]
    });
    fixture = TestBed.createComponent(CalculateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
