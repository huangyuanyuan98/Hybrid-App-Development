import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //组件中引入HTTP服务[想在哪个组件使用就引]
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }   //组件构造函数中声明
  course;
  headers = new HttpHeaders({});
  ngOnInit() {
    // this.http.get('http://localhost:8080/course').subscribe((data)=>{   //调用请求函数

    // get请求
    // this.http.get('/api/courses/3').subscribe((data)=>{   //调用请求函数

    //post请求
    this.http.post('/api',{name:'xixixi',pwd:123},{headers:this.headers}).subscribe((data)=>{ //HttpClient.post(url: string, body: any, options)
    //body的解析在server.ts import bodyParser from 'body-parser';  const app = express(); app.use(bodyParser.json());
      console.log(data);
      // this.course = data;
    })
  }

  ngOnDestory(){
    // console.log(11);
    // clearInterval(this.timer);
  }
}
