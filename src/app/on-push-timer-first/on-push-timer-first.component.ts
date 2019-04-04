import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-on-push-timer-first',
  templateUrl: './on-push-timer-first.component.html',
  styleUrls: ['./on-push-timer-first.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushTimerFirstComponent implements OnInit {
  constructor() { }
  @Input() inputCount: number = 0;
  counter: number = 0;
  ngOnInit() {
    setInterval(()=>{
      this.inputCount++;
    }, 1000);
  }
  ngDoCheck(){

  }
}
