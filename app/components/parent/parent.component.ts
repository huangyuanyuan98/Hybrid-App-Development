import { Component, OnInit, Input } from '@angular/core';
import { TodolistserviceService } from '../../services/todolistservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  arr1:string[]=[];
  constructor(private local:TodolistserviceService) { }
  getInput(msg:string){
    this.arr1.push(msg);
    this.local.set('list1',this.arr1);
    this.arr1 = this.local.get('list1').split(",");
    // console.log(this.local.get('list1'));
    // console.log(this.arr1);
  }
  ngOnInit() {
  }

}
