import { Component, OnInit, Input } from '@angular/core';
import { TodolistserviceService } from '../../services/todolistservice.service';

@Component({
  selector: 'app-childlist',
  templateUrl: './childlist.component.html',
  styleUrls: ['./childlist.component.css']
})
export class ChildlistComponent implements OnInit {
  @Input() arring;
  arr2:string[]=[];
  constructor(private local:TodolistserviceService) { }
  deling(idx:number){
    this.arring.splice(idx,1);
    this.local.set('list1',this.arring);
  }
  completed(idx:number){
    // console.log(this.arring[idx]);
    this.arr2.push(this.arring[idx]);
    // console.log(this.arr2);
    this.arring.splice(idx,1);
    this.local.set('list1',this.arring);
    this.local.set('list2',this.arr2);
  }
  deled(idx:number){
    this.arr2.splice(idx,1);
    this.local.set('list2',this.arr2);
  }
  ing(idx:number){
    this.arring.push(this.arr2[idx]);
    this.arr2.splice(idx,1);
    this.local.set('list1',this.arring);    
    this.local.set('list2',this.arr2);
  }
  ngOnInit() {
    if(this.local.get('list1')){
      console.log(this.local.get('list1'));
      this.arring = this.local.get('list1').split(",");
      this.arr2 = this.local.get('list2').split(",");
    }
    // localStorage.clear();
  }

}
