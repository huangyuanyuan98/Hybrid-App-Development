import express from 'express';
import bodyParser from 'body-parser';//解析body

const app = express();
app.use(bodyParser.json());
//通知
export class Tell{
    constructor(
        public images:string,
        public name:string,//人名
        public information:string,
        public time:string,//时间
        public comment:number
        ){}
}
const tellings = [
    new Tell("http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256",'王艳华',
    "@全体成员  ，在第五次任务检查过程中，我惊喜的发现有同学在自行查阅资料，寻得课堂之外的解决方案，非常好，特此表扬！！！拓展知识分享：删除重复元素的程序，列表的count（）方法也是一种不错的解决方案。",
    '2016-11-09 11:31',4),
    new Tell("http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256",'王艳华',
    "@全体成员  ，任务4根据目前提交情况看，大家做的普遍较好。需要注意的是，第7题，在编译器中编写并调试下，有些细节需要在实践中去体会。",
    '2016-10-27 17:30',0),
    new Tell("http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256",'王艳华',
    "@全体成员  ，同学们，任务1已经发布，在领取任务之后，要在规定的时间之内完成并提交系统，大家奔走相告啊~",
    '2016-10-09 14:17',5)
];
//动态
export class Dynamic{
    constructor(
        public images:string,
        public name:string,//人名
        public information:string,
        public time:string,//时间
        public comment:number
        ){}
}
const talks = [
    new Dynamic("http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256",'王艳华',
    "任务11：office应用按照下列要求设置“学生成绩表”，将截图提交雪梨：1.找出学生英语成绩低于70分的,并用不同颜色标出 2.选出英语成绩高于80分或数学成绩高于80分的（要求自动筛选、高级筛选） 3.分别统计男生和女生的总分平均分",
    '2016-12-21 15:37',4),
    new Dynamic("http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256",'王艳华',
    "任务10：程序设计导引（二）和OS 1、根据自己的理解谈一谈软件生命周期 2、简述什么是操作系统，操作系统的分类有哪些？ 3、描述进程的三种状态，以及转化过程。",
    '2016-11-28 15:50',0),
    new Dynamic("http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256",'王艳华',
    "任务8：复习小测验 学期过半，同学们在学习新知识的同时要合理安排复习了。 搜集一些题目，给大家验证复习效果用，答案提交在雪梨即可。 点击此处打开",
    '2016-11-18 10:15',5)
];
//同步课
export class Course{
    constructor(
        public id:number,
        public courseName:string,//课程名
        public images:string,
        public task:number,//任务数量
        public person:number,//人数
        public score:number//分数
        ){}
}
const courses = [
    new Course(1,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    10,90,0),
    new Course(2,'软件测试',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    10,90,0),
    new Course(3,'web(二)',
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    10,90,10),
    new Course(4,"2017级3、4班软件测试",
    "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    10,80,10),
    new Course(5,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    10,90,8),
    new Course(6,'软件测试',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    10,90,4),
    new Course(7,'web(二)',
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    10,90,5),
    new Course(8,"2017级3、4班软件测试",
    "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    10,80,100)
];
//社区
export class Shequ{
    constructor(
        public id:number,
        public head:string,//头像
        public articleName:string,//文章名
        public images:string,
        public read:number,//阅读量
        public comment:number,//评论数
        public excerpt:string
        ){}
}
const articles = [
    new Shequ(1,"http://usercontent.edu2act.cn/media/userheader/16-11-10/jut8pNbf66NgrWMdGPWejD.jpg?imageView2/1/w/256/h/256",
    'WEB开发（二）—— 函数',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg",
    690,11,
    "（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一"),
    
    new Shequ(2,"http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256",'类定义关键字详解',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
    510,5,
    "JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就"),
    
    new Shequ(3,"http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256",'一个java文件中可包含多个main方法',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg",
    10,90,
    "一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只"),

    new Shequ(4,"http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256",'数据结构——线性表的经典应用',
    "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg",
    43,0,
    "1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。")
]
//课程
export class Lesson{
    constructor(
        public id:number,
        public lessonName:string,
        public images:string,
        public content:string,
        public hour:number,
        public person:number
        ){}
}
const lessons = [
    new Lesson(1,'Github 开源之旅视频课程第一季：启程',
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
    12,4250),
    new Lesson(2,'CSS3',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性",
    10,3735),
    new Lesson(3,'Github 开源之旅视频课程第一季：启程',
    "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
    12,2315),
    new Lesson(4,'CSS3',
    "http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性",
    10,3131),
    new Lesson(5,'Github 开源之旅视频课程第一季：启程',
    "http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
    10,1572),
    new Lesson(6,'CSS3',
    "http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性",
    10,3982),
    new Lesson(7,'Github 开源之旅视频课程第一季：启程',
    "http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
    10,4455),
    new Lesson(8,'CSS3',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性",
    10,5566)
]
app.get('/api',(req,res)=>{
    res.json('hello world');
});
app.get('/api/courses',(req,res)=>{
    // res.end(JSON.stringify(courses));//JSON数据转成字符串
    res.json(courses);//[中文自动转码]
});
app.get('/api/courses/:id',(req,res)=>{
    // res.end(JSON.stringify(courses));
    console.log(req.params);
    res.json(courses.find((ele)=>ele.id == req.params.id));
    // res.json(courses.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);//server里显示解析的body信息 { name: 'xixixi', pwd: 123 }
    res.json(courses);
});

app.get('/api/articles',(req,res)=>{
    res.json(articles);//[中文自动转码]
});
app.get('/api/articles/:id',(req,res)=>{
    console.log(req.params);
    res.json(articles.find((ele)=>ele.id == req.params.id));
});

app.get('/api/lessons',(req,res)=>{
    res.json(lessons);//[中文自动转码]
});
app.get('/api/lessons/:id',(req,res)=>{
    console.log(req.params);
    res.json(lessons.find((ele)=>ele.id == req.params.id));
});

app.get('/api/talks',(req,res)=>{
    res.json(talks);//[中文自动转码]
});

app.get('/api/tellings',(req,res)=>{
    res.json(tellings);//[中文自动转码]
});
app.listen(8080);