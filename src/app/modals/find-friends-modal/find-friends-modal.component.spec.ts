import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFriendsModalComponent } from './find-friends-modal.component';

describe('FindFriendsModalComponent', () => {
  let component: FindFriendsModalComponent;
  let fixture: ComponentFixture<FindFriendsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindFriendsModalComponent]
    });
    fixture = TestBed.createComponent(FindFriendsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
