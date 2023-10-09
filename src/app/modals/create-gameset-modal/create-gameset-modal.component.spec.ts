import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGamesetModalComponent } from './create-gameset-modal.component';

describe('CreateGamesetModalComponent', () => {
  let component: CreateGamesetModalComponent;
  let fixture: ComponentFixture<CreateGamesetModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGamesetModalComponent]
    });
    fixture = TestBed.createComponent(CreateGamesetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
