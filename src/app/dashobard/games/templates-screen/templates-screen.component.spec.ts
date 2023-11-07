import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesScreenComponent } from './templates-screen.component';

describe('TemplatesScreenComponent', () => {
  let component: TemplatesScreenComponent;
  let fixture: ComponentFixture<TemplatesScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatesScreenComponent]
    });
    fixture = TestBed.createComponent(TemplatesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
