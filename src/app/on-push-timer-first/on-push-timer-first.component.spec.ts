import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushTimerFirstComponent } from './on-push-timer-first.component';

describe('OnPushTimerFirstComponent', () => {
  let component: OnPushTimerFirstComponent;
  let fixture: ComponentFixture<OnPushTimerFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushTimerFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushTimerFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
