import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsRequestsListPaginationComponent } from './friends-requests-list-pagination.component';

describe('FriendsRequestsListPaginationComponent', () => {
  let component: FriendsRequestsListPaginationComponent;
  let fixture: ComponentFixture<FriendsRequestsListPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsRequestsListPaginationComponent]
    });
    fixture = TestBed.createComponent(FriendsRequestsListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
