import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBanerComponent } from './error-baner.component';

describe('ErrorBanerComponent', () => {
  let component: ErrorBanerComponent;
  let fixture: ComponentFixture<ErrorBanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorBanerComponent]
    });
    fixture = TestBed.createComponent(ErrorBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
