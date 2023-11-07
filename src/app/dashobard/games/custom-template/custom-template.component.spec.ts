import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTemplateComponent } from './custom-template.component';

describe('CustomTemplateComponent', () => {
  let component: CustomTemplateComponent;
  let fixture: ComponentFixture<CustomTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTemplateComponent]
    });
    fixture = TestBed.createComponent(CustomTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
