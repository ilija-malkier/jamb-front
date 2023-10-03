import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGamesetComponent } from './account-gameset.component';

describe('AccountGamesetComponent', () => {
  let component: AccountGamesetComponent;
  let fixture: ComponentFixture<AccountGamesetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountGamesetComponent]
    });
    fixture = TestBed.createComponent(AccountGamesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
