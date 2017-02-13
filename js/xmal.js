$(function(){
	var oHd_cr=document.getElementById('hd_cr');
	var aHli=oHd_cr.children;
	var oHbox=aHli[aHli.length-1];
	startMove(oHbox, aHli[1].offsetLeft);
	for(var i=0;i<aHli.length-1;i++){
	
		aHli[i].onmouseover=function (){
		
			startMove(oHbox, this.offsetLeft);
		};
	}
	oHd_cr.onmouseout=function(){
		startMove(oHbox, aHli[1].offsetLeft);
	}
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
	var oUl3=document.getElementById('p_con');
	var aImg3=oUl3.getElementsByTagName('img');
	var oUl4=document.getElementById('p_con2');
	var aImg4=oUl4.getElementsByTagName('img');
	for(var i=0;i<aImg3.length;i++){
		aImg3[i].onmouseover=function(){
			this.style.zIndex=99;
			move(this,{width:300,height:300,marginLeft:-35,marginTop:-35},{time:500});
			this.parentNode.parentNode.onmouseover=function(){
				move(this.children[0].children[1],{bottom:0},{time:300});
				move(this.children[0].children[2],{bottom:0},{time:300});
			}

		}
		aImg3[i].onmouseout=function(){
			this.style.zIndex=0;
			move(this,{width:230,height:230,marginLeft:0,marginTop:0},{time:500});
			this.parentNode.parentNode.onmouseout=function(){
				move(this.children[0].children[1],{bottom:-80},{time:100});
				move(this.children[0].children[2],{bottom:-80},{time:100});
			}
		}
	}
	for(var i=0;i<aImg4.length;i++){
		aImg4[i].onmouseover=function(){
			this.style.zIndex=99;
			move(this,{width:300,height:300,marginLeft:-35,marginTop:-35},{time:500});
			this.parentNode.parentNode.onmouseover=function(){
				move(this.children[0].children[1],{bottom:0},{time:300});
				move(this.children[0].children[2],{bottom:0},{time:300});
			}

		}
		aImg4[i].onmouseout=function(){
			this.style.zIndex=0;
			move(this,{width:230,height:230,marginLeft:0,marginTop:0},{time:500});
			this.parentNode.parentNode.onmouseout=function(){
				move(this.children[0].children[1],{bottom:-80},{time:100});
				move(this.children[0].children[2],{bottom:-80},{time:100});
			}
		}
	}
	//中心放大
	$('.l_nav li').eq(0).click(function(){
		$('body,html').stop().animate({scrollTop:0},1000);
	})
	$('.l_nav li').eq(1).click(function(){
		$('body,html').stop().animate({scrollTop:750},1000);
	})
	$('.l_nav li').eq(2).click(function(){
		$('body,html').stop().animate({scrollTop:1200},1000);
	})
	$('.l_nav li').eq(3).click(function(){
		$('body,html').stop().animate({scrollTop:0},1000);
	})
	$(window).scroll(function(){
		var t=$(this).scrollTop();
		if(t<750){
			$('.l_nav li').removeClass('on');
			$('.l_nav li').eq(0).addClass('on');
		}
		if(t>=750&&t<1200){
			$('.l_nav li').removeClass('on');
			$('.l_nav li').eq(1).addClass('on');
		}
		if(t>=1200){
			$('.l_nav li').removeClass('on');
			$('.l_nav li').eq(2).addClass('on');
		}
	});
	//返回顶部和向下
	var oGq=document.querySelector('.gangqin')
	var aLi66=oGq.querySelectorAll('li');
		
	var oA=new Audio();
	
	for(var i=0;i<aLi66.length;i++){
		aLi66[i].index=i;
		aLi66[i].onmousedown=function(){
			this.className='on';
			oA.src=oggSound['sound'+(49+this.index)];
			oA.play();
		};
		aLi66[i].onmouseup=function(){
			this.className='';	
		};	
	}
	//钢琴
   var oWeixin=document.getElementById('weixin');
   var oWeixinB=document.getElementById('weixinb');
   oWeixin.onmouseover=function(){
  	move(oWeixinB,{opacity:1},{time:400,});
   }
   oWeixin.onmouseout=function(){
  	move(oWeixinB,{opacity:0},{time:400,});
   }
   //微信

});
