import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  courseId:number;
  course;
  num = 1;
  change(e){
    // console.log(e);
    this.num = e.target.value;
  }
  jsonObject: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2]}};
  date:Date = new Date();
  ngOnInit() {
    //参数快照
    this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).subscribe((data)=>{
      console.log(data);
      this.course = data;
    })
    // this.http.get('/api/courses/'+this.courseId).pipe(map(data=>{
    //   // data.name = "haha";
    //   return data;
    //   // return ...   可以添加更多的信息[数据提前进行一个处理]
    // })).pipe(filter(data=>{
    //   return data.id == 3;//id为3的才打印信息，不为三的不输出信息
    // })).subscribe((data)=>{
    //   console.log(data);
    //   this.course = data;
    // })
    //.pipe() (method) Observable<Object>.pipe(): Observable<Object>
  }

}
