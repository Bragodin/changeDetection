import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit {
  value: number = 0;
  val: number = 0;
  valueGet(newValue){
    this.val = parseInt(newValue);
  }
  changeValue(){
    this.value = this.val;
  }
  constructor() { }
  ngOnInit() {

  }
  ngDoCheck(){
  }
}
