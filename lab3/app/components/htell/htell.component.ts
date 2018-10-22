import { Component, OnInit } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Component({
  selector: 'app-htell',
  templateUrl: './htell.component.html',
  styleUrls: ['./htell.component.css']
})
export class HtellComponent implements OnInit {
  constructor(private http:HttpClient) { }
  tellings;
  ngOnInit() {
    this.http.get('api/tellings').subscribe((data)=>{
      this.tellings = data;
    })
  }
}
