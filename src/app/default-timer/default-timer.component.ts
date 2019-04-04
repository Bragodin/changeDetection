import { Component, OnInit, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-default-timer',
  templateUrl: './default-timer.component.html',
  styleUrls: ['./default-timer.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultTimerComponent implements OnInit {
  @Input() inputCount: number = 0;
  counter: number = 0;
  constructor() { }
  ngOnInit() {
    setInterval(()=>{
      this.counter++;
    }, 1000);
  }
  ngDoCheck(){

  }
}
