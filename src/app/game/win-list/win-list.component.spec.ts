import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinListComponent } from './win-list.component';

describe('WinListComponent', () => {
  let component: WinListComponent;
  let fixture: ComponentFixture<WinListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinListComponent]
    });
    fixture = TestBed.createComponent(WinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
