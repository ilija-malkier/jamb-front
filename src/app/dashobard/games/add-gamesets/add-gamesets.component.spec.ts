import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGamesetsComponent } from './add-gamesets.component';

describe('AddGamesetsComponent', () => {
  let component: AddGamesetsComponent;
  let fixture: ComponentFixture<AddGamesetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGamesetsComponent]
    });
    fixture = TestBed.createComponent(AddGamesetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
