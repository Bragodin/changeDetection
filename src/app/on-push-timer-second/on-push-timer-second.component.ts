import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { detectChanges } from '@angular/core/src/render3';

@Component({
  selector: 'app-on-push-timer-second',
  templateUrl: './on-push-timer-second.component.html',
  styleUrls: ['./on-push-timer-second.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushTimerSecondComponent implements OnInit {
  @Input() inputCount: number = 0;
  counter: number = 0;
  constructor(private ref: ChangeDetectorRef) {
  }
  ngOnInit() {
    setInterval(()=>{
      this.inputCount++;
      this.ref.detectChanges();
    }, 1000);
  }
  ngDoCheck(){
  }
}
