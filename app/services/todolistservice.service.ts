import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistserviceService {
  set(key,value){
    localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key);//需要写个return
  }
  constructor() { }
}
