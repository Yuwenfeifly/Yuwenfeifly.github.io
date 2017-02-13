$(function(){
	var oHd_cr=document.getElementById('hd_cr');
	var aHli=oHd_cr.children;
	var oHbox=aHli[aHli.length-1];
	startMove(oHbox, aHli[2].offsetLeft);
	for(var i=0;i<aHli.length-1;i++){
	
		aHli[i].onmouseover=function (){
		
			startMove(oHbox, this.offsetLeft);
		};
	}
	oHd_cr.onmouseout=function(){
		startMove(oHbox, aHli[2].offsetLeft);
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
   var oMy=document.getElementById('menav');
   var aLi=oMy.children;
   for(var i=0;i<aLi.length;i++){
   	aLi[i].onmouseover=function(){
	   	for(var i=0;i<aLi.length;i++){
	   		aLi[i].className='';
	   		aLi[i].children[0].style.display='none';
	   	}
	   	this.className='active';
   		this.children[0].style.display='block';
   	}
   }
   //选项卡
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