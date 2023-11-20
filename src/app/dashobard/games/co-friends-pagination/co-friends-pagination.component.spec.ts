import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoFriendsPaginationComponent } from './co-friends-pagination.component';

describe('CoFriendsPaginationComponent', () => {
  let component: CoFriendsPaginationComponent;
  let fixture: ComponentFixture<CoFriendsPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoFriendsPaginationComponent]
    });
    fixture = TestBed.createComponent(CoFriendsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
