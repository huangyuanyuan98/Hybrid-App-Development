function getStyle(obj,attr){
	//有两个方法 谷歌 IE => 兼容的写法
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];//第二个参数是获取伪类，只写一个参也行
	}
}
function animate(obj,json,callback){//第二个参数对象 {left:300,top:500} 第三个回调函数
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
//		console.log(1);//看定时器是否被清掉
		var isStop = true;
		for(var attr in json){//遍历对象
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
//			var now = parseInt(getStyle(obj,attr));
			var speed = (json[attr]-now)/6;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
            var current = now + speed;
            if(attr == 'opacity'){
            	obj.style.opacity = current/100;//opacity不用带单位
            }else{
            	obj.style[attr] = current + "px";
            }
            if(json[attr] !== current){
            	isStop = false;//判断一个不是 比 三个是 好
            }
		}
		if(isStop){
			clearInterval(obj.timer);
//			if(callback){callback();}//不是必须的,不能直接写callback() 会显示callback是undefined
		    callback&&callback();//与操作符【短路逻辑】
		}
	},10)
}
