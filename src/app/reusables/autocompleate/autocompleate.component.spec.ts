import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleateComponent } from './autocompleate.component';

describe('AutocompleateComponent', () => {
  let component: AutocompleateComponent;
  let fixture: ComponentFixture<AutocompleateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleateComponent]
    });
    fixture = TestBed.createComponent(AutocompleateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
