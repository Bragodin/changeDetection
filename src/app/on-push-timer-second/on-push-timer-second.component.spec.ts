import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushTimerSecondComponent } from './on-push-timer-second.component';

describe('OnPushTimerSecondComponent', () => {
  let component: OnPushTimerSecondComponent;
  let fixture: ComponentFixture<OnPushTimerSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushTimerSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushTimerSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
