import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTemplateButtonComponent } from './toggle-template-button.component';

describe('ToggleTemplateButtonComponent', () => {
  let component: ToggleTemplateButtonComponent;
  let fixture: ComponentFixture<ToggleTemplateButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleTemplateButtonComponent]
    });
    fixture = TestBed.createComponent(ToggleTemplateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
