import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-childinput',
  templateUrl: './childinput.component.html',
  styleUrls: ['./childinput.component.css']
})
export class ChildinputComponent implements OnInit {
  @Output() inputvalue = new EventEmitter();//子组件暴露EventEmitter属性，并用@Output()装饰
  txt:string;
  // arr1 = new Array();     
  constructor() { }
  getValue(e){
    if(e.keyCode == 13){
      this.inputvalue.emit(this.txt);
      this.txt = '';   //输入结束后，输入框自动清空
    }
  } 
  ngOnInit() {
  }

}
