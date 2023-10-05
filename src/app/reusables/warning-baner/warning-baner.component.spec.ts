import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningBanerComponent } from './warning-baner.component';

describe('WarningBanerComponent', () => {
  let component: WarningBanerComponent;
  let fixture: ComponentFixture<WarningBanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarningBanerComponent]
    });
    fixture = TestBed.createComponent(WarningBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
