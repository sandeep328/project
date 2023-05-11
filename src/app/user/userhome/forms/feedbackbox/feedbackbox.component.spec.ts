import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackboxComponent } from './feedbackbox.component';

describe('FeedbackboxComponent', () => {
  let component: FeedbackboxComponent;
  let fixture: ComponentFixture<FeedbackboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
