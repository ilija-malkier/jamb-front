import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsSettingsComponent } from './friends-settings.component';

describe('FriendsSettingsComponent', () => {
  let component: FriendsSettingsComponent;
  let fixture: ComponentFixture<FriendsSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsSettingsComponent]
    });
    fixture = TestBed.createComponent(FriendsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
