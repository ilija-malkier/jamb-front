import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinCardComponent } from './win-card.component';

describe('WinCardComponent', () => {
  let component: WinCardComponent;
  let fixture: ComponentFixture<WinCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinCardComponent]
    });
    fixture = TestBed.createComponent(WinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
