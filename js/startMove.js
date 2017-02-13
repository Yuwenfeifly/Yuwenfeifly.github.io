var left=0;
function startMove(obj, iTarget){
	var speed=0;
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		speed+=(iTarget-left)/5;	//加速
		speed*=0.7;					//摩擦-减速
		
		/*if(Math.round(left)==iTarget)
		{
			clearInterval(obj.timer);
		}*/
		
		if(Math.round(left)==iTarget && Math.round(speed)==0){
		
			clearInterval(obj.timer);
		}
		else{
			left+=speed;
			obj.style.left=Math.round(left)+'px';
		}
	}, 30);
}