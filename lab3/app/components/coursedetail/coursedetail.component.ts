import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  lessonId:number;
  lesson;
  ngOnInit() {
    this.lessonId = this.router.snapshot.params['lessonId'];
    this.http.get('/api/lessons/'+this.lessonId).subscribe((data)=>{
      this.lesson= data;
    })
  }
}
