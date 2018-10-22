import { Component, OnInit } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Component({
  selector: 'app-htalk',
  templateUrl: './htalk.component.html',
  styleUrls: ['./htalk.component.css']
})
export class HtalkComponent implements OnInit {
  constructor(private http:HttpClient) { }
  talks;
  ngOnInit() {
    this.http.get('api/talks').subscribe((data)=>{
      this.talks = data;
    })
  }
}
