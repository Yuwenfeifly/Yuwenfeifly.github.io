$(function(){
	var oHd_cr=document.getElementById('hd_cr');
	var aHli=oHd_cr.children;
	var oHbox=aHli[aHli.length-1];
	var oBanner=document.getElementById('banner');
	var l=1;
	
	for(var i=0;i<aHli.length-1;i++){
	
		aHli[i].onmouseover=function (){
		
			startMove(oHbox, this.offsetLeft);
		};
	}
	oHd_cr.onmouseout=function (){
		
		startMove(oHbox, aHli[0].offsetLeft);
	};
	var t1=$(window).scrollTop();
	$('.header').addClass('on');
	$(window).scroll(function(){
		var t2=$(this).scrollTop();
		if(t2>t1){
			$('.header').removeClass('on');
		}else{
			$('.header').addClass('on');
		}
		t1=t2;
	});
	//导航
	$('.down').click(function(){
		$('body,html').stop().animate({scrollTop:670},1200);
	})
	$(window).scroll(function(){
		var t=$(this).scrollTop();
		if(t>=670){
			$('.top').stop().fadeIn();
		}else{
			$('.top').stop().fadeOut();
		}
	});
	$('.top').click(function(){
		$('body,html').stop().animate({scrollTop:0},500);
	})
	//返回顶部和向下
	var oDown=document.getElementById('down');
	move(oBanner,{opacity:1},{time:1600,end:function(){
		move(oDown,{top:530},{time:400});
	}});
	//banner 渐进

	var oUl=document.getElementById('p_con');
	var aLi=oUl.children;
	var arr=[];
	var zIndex=20;

	for(var i=0;i<aLi.length;i++){
		arr.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].style.left=arr[i].left+'px';
		aLi[i].style.top=arr[i].top+'px';
		aLi[i].style.position='absolute';
		aLi[i].style.margin=0;
	}
	for(var i=0;i<aLi.length;i++){
		drag(aLi[i]);
	    aLi[i].index=i;
	}
	function drag(obj){
		obj.onmousedown=function(ev){
			var oEvent=ev||event;
			var disX=oEvent.clientX-obj.offsetLeft;
			var disY=oEvent.clientY-obj.offsetTop;
			obj.style.zIndex=zIndex++;

			document.onmousemove=function(ev){
				var oEvent=ev||event;
				var l=oEvent.clientX-disX;
				var t=oEvent.clientY-disY;

				obj.style.left=l+'px';
				obj.style.top=t+'px';
				var near=findNear(obj);
				for(var i=0;i<aLi.length;i++){
					aLi[i].className=''
				}
				if(near){
					near.className='active';
				}	
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
				var oNear=findNear(obj);
				if(oNear){
					obj.style.left=arr[oNear.index].left+'px';
					obj.style.top=arr[oNear.index].top+'px';

					oNear.style.left=arr[obj.index].left+'px';
					oNear.style.top=arr[obj.index].top+'px';

					var car;
					car=oNear.index;
					oNear.index=obj.index;
					obj.index=car;
					oNear.className='';
				}else{
					obj.style.left=arr[obj.index].left+'px';
					obj.style.top=arr[obj.index].top+'px';
				}
			};
			return false;
		};
	}
	function collTest(obj,obj2){
		var l=obj.offsetLeft;
		var r=obj.offsetLeft+obj.offsetWidth;
		var t=obj.offsetTop;
		var b=obj.offsetTop+obj.offsetHeight;
		var l2=obj2.offsetLeft;
		var r2=obj2.offsetLeft+obj2.offsetWidth;
		var t2=obj2.offsetTop;
		var b2=obj2.offsetTop+obj2.offsetHeight;

		if(r>l2&&l<r2&&t<b2&&b>t2){
			return true;
		}else{
			return false;
		}

	}
	function dis(obj,obj2){
		var a=obj2.offsetLeft-obj.offsetLeft;
		var b=obj2.offsetTop-obj.offsetTop;

		return Math.sqrt(a*a+b*b);
	}
	function findNear(obj){
		var iMin=999999;
		var iMinIndex=-1;

		for(var i=0;i<aLi.length;i++){
			if(obj==aLi[i])continue;
			if(collTest(obj,aLi[i])){
			 var dis1=dis(obj,aLi[i])
				if(iMin>dis1){
					iMin=dis1;
					iMinIndex=i;
				}
			}
		}
		if(iMinIndex==-1){
			return null;
		}else{
			return aLi[iMinIndex];
		}
		
	}
	//图片墙
	var oUl3=document.getElementById('p_con');
	var aImg3=oUl3.getElementsByTagName('img');
	for(var i=0;i<aImg3.length;i++){
		aImg3[i].onmouseover=function(){
			this.style.zIndex=99;
			move(this,{width:400,height:400,marginLeft:-50,marginTop:-50},{time:500});
			this.parentNode.onmouseover=function(){
				move(this.children[1],{bottom:0},{time:300});
				move(this.children[2],{bottom:0},{time:300});
			}

		}
		aImg3[i].onmouseout=function(){
			this.style.zIndex=0;
			move(this,{width:300,height:300,marginLeft:0,marginTop:0},{time:500});
			this.parentNode.onmouseout=function(){
				move(this.children[1],{bottom:-100},{time:100});
				move(this.children[2],{bottom:-100},{time:100});
			}
		}
	}
	//中心放大
	var oIphone=document.getElementById('iphone');
	var o3d=document.getElementById('3d');
	var oSfq=document.getElementById('sfq');
	var o3dm=document.getElementById('3dm');
	var oFenkuai=document.getElementById('fenkuai');
	var oGwzs=document.getElementById('gwzs');
	var oMore=document.getElementById('more');
	var oMe=document.getElementById('me');
	var oXm=document.getElementById('xm');
	oXm.onmouseover=oMe.onmouseover=oMore.onmouseover=function(){
		move(this.children[0].children[0],{left:this.offsetWidth},{time:400})
	}
	oXm.onmouseout=oMe.onmouseout=oMore.onmouseout=function(){
		move(this.children[0].children[0],{left:0},{time:400})
	}
	oIphone.ondblclick=function(){
        window.open('iPhone图片查看器/zns_demo.html');
    };
    o3d.ondblclick=function(){
        window.open('3D图片轮换2/demo4.html');
    };
    oSfq.ondblclick=function(){
        window.open('h5/3d图片环10.html');
    };
    o3dm.ondblclick=function(){
        window.open('3D立体效果/极丑视差滚动.html');
    };
    oFenkuai.ondblclick=function(){
        window.open('分块/分块.html');
    };
    oGwzs.ondblclick=function(){
        window.open('官网效果展示/官网效果展示.html');
    };
   //外链文件
  var oWeixin=document.getElementById('weixin');
  var oWeixinB=document.getElementById('weixinb');
  oWeixin.onmouseover=function(){
  	move(oWeixinB,{opacity:1},{time:400});
  }
  oWeixin.onmouseout=function(){
  	move(oWeixinB,{opacity:0},{time:400});
  }
  //微信
		
})