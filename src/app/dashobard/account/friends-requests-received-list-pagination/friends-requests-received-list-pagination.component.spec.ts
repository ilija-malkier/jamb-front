import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsRequestsReceivedListPaginationComponent } from './friends-requests-received-list-pagination.component';

describe('FriendsRequestsReceivedListPaginationComponent', () => {
  let component: FriendsRequestsReceivedListPaginationComponent;
  let fixture: ComponentFixture<FriendsRequestsReceivedListPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsRequestsReceivedListPaginationComponent]
    });
    fixture = TestBed.createComponent(FriendsRequestsReceivedListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
