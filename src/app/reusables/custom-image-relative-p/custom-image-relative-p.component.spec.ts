import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomImageRelativePComponent } from './custom-image-relative-p.component';

describe('CustomImageRelativePComponent', () => {
  let component: CustomImageRelativePComponent;
  let fixture: ComponentFixture<CustomImageRelativePComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomImageRelativePComponent]
    });
    fixture = TestBed.createComponent(CustomImageRelativePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
