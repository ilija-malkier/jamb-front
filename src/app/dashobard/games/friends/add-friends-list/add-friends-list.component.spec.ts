import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendsListComponent } from './add-friends-list.component';

describe('AddFriendsListComponent', () => {
  let component: AddFriendsListComponent;
  let fixture: ComponentFixture<AddFriendsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFriendsListComponent]
    });
    fixture = TestBed.createComponent(AddFriendsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
