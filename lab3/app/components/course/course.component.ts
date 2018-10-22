import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient }from '@angular/common/http';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  lessonId:number;
  lessons;
  ngOnInit() {
    //参数快照
    // this.courseId = this.router.snapshot.params['courseId'];
    //参数订阅
    // this.router.params.subscribe((params)=>{
    //   this.courseId = params['courseId'];
    // });
    this.http.get('api/lessons').subscribe((data)=>{
      // console.log(data);
      this.lessons = data;
    })
  }

}
