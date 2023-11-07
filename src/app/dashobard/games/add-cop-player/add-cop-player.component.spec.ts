import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCopPlayerComponent } from './add-cop-player.component';

describe('AddCopPlayerComponent', () => {
  let component: AddCopPlayerComponent;
  let fixture: ComponentFixture<AddCopPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCopPlayerComponent]
    });
    fixture = TestBed.createComponent(AddCopPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
