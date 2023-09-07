import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsListPaginationComponent } from './friends-list-pagination.component';

describe('FriendsListPaginationComponent', () => {
  let component: FriendsListPaginationComponent;
  let fixture: ComponentFixture<FriendsListPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsListPaginationComponent]
    });
    fixture = TestBed.createComponent(FriendsListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
