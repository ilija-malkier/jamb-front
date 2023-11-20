import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendAddCardUnselectComponent } from './friend-add-card-unselect.component';

describe('FriendAddCardUnselectComponent', () => {
  let component: FriendAddCardUnselectComponent;
  let fixture: ComponentFixture<FriendAddCardUnselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendAddCardUnselectComponent]
    });
    fixture = TestBed.createComponent(FriendAddCardUnselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
