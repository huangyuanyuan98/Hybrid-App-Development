import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { CommonService } from './services/common.service';
import { RouterModule,Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { HtaskComponent } from './components/htask/htask.component';
import { HtongbuComponent } from './components/htongbu/htongbu.component';
import { HcourseComponent } from './components/hcourse/hcourse.component';
import { HtalkComponent } from './components/htalk/htalk.component';
import { HtellComponent } from './components/htell/htell.component';
import { APipe } from './pipes/a.pipe';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
@NgModule({
  declarations: [//放组件和管道
    AppComponent,
    TodolistComponent,
    ParentComponent,
    InputComponent,
    ListComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
    HtaskComponent,
    HtongbuComponent,
    HcourseComponent,
    HtalkComponent,
    HtellComponent,
    APipe,
    CoursedetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[//子路由
        {path:'htask',component:HtaskComponent},
        {path:'htongbu',component:HtongbuComponent},
        {path:'hcourse',component:HcourseComponent},
        {path:'htalk',component:HtalkComponent},
        {path:'htell',component:HtellComponent},
        {path:'**',component:HtaskComponent},
        {path:'',redirectTo:'htask',pathMatch:'full'},//子路由的重定向，跳转到首页组件时默认todolist组件显示
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:lessonId',component:CoursedetailComponent},
      {path:'shequ',component:ShequComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:HomeComponent},
    ]),
    HttpClientModule,
  ],
  providers: [{provide:CommonService,useClass:CommonService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
