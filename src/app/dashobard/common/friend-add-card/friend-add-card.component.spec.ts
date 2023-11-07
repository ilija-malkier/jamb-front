import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendAddCardComponent } from './friend-add-card.component';

describe('FriendAddCardComponent', () => {
  let component: FriendAddCardComponent;
  let fixture: ComponentFixture<FriendAddCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendAddCardComponent]
    });
    fixture = TestBed.createComponent(FriendAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
