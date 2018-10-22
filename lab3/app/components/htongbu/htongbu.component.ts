import { Component, OnInit } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Component({
  selector: 'app-htongbu',
  templateUrl: './htongbu.component.html',
  styleUrls: ['./htongbu.component.css']
})
export class HtongbuComponent implements OnInit {

  constructor(private http:HttpClient) { }
  courseId:number;
  courses;
  ngOnInit() {
    this.http.get('api/courses').subscribe((data)=>{
      // console.log(data);
      this.courses = data;
    })
  }
}
