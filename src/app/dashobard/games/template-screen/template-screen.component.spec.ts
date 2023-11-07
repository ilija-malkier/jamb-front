import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateScreenComponent } from './template-screen.component';

describe('TemplateScreenComponent', () => {
  let component: TemplateScreenComponent;
  let fixture: ComponentFixture<TemplateScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateScreenComponent]
    });
    fixture = TestBed.createComponent(TemplateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
