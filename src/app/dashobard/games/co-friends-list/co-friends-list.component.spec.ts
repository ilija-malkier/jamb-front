import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoFriendsListComponent } from './co-friends-list.component';

describe('CoFriendsListComponent', () => {
  let component: CoFriendsListComponent;
  let fixture: ComponentFixture<CoFriendsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoFriendsListComponent]
    });
    fixture = TestBed.createComponent(CoFriendsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
