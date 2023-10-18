import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsRequestsSendListPaginationComponent } from './friends-requests-send-list-pagination.component';

describe('FriendsRequestsListPaginationComponent', () => {
  let component: FriendsRequestsSendListPaginationComponent;
  let fixture: ComponentFixture<FriendsRequestsSendListPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsRequestsSendListPaginationComponent]
    });
    fixture = TestBed.createComponent(FriendsRequestsSendListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
