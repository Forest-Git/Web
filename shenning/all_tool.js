function run(id){
		var oSl=document.getElementById(id);;
		var chkAll=oSl.getElementsByTagName('input')[0];alert(123123)
		var aInput=oSl.getElementsByTagName('div')[0].getElementsByTagName('input');
		var n=0
		chkAll.onclick=function (){		
	//选中全选则下面全部选中
			for (var i = 0;i<aInput.length;i++) {
				if (this.checked) {
					aInput[i].checked=true;
					n=aInput.length;
				}else{
					aInput[i].checked=false;
					 n=0;
				}
				console.log('全选：'+n)

			}
		}
		for(var i=0;i<aInput.length;i++){
			aInput[i].onclick=function(){
				if (this.checked) {
					n++;//这步是 命了一个变量 后期对这个变量进行判断 
				}else{
					n--;
				}//由于我们是想当 三个全选的时候 上面的也勾选上 当下面的勾选个数不等于 长度时则上面不勾选
				if (n==aInput.length) {//所以这一步是开始对n和aInput进行比较
					chkAll.checked=true;
				}else{
					chkAll.checked=false;
				}
				console.log(n)
			}
		}	
	}
	//-=------------------------------------------
function banner(id){
	var oBox=document.getElementById(id)
	var aP=oBox.getElementsByTagName('p')[0];
	var aIm=aP.getElementsByTagName('img');
	var w=aIm.length*400;
	aP.innerHTML+=aP.innerHTML;
	aP.style.width= w*2+'px';
	var run=0;
	var timer='';
	function move(){
		timer=setInterval(function(){//！1做到这步是让图片 横向运动；
		run-=10;
		aP.style.left=run+'px';
				if (run<-w) {//-------------------2我们让图片轮流播放；
		run=0;console.log(run)
				}
	},30)
	}
	move ();
	//3.。。。。我又想当我鼠标放上去???(放到哪里？)的时候就停止
	oBox.onmouseover=function(){
		clearInterval(timer)
	}
	oBox.onmouseout=function(){
		move();
	}

	}
	/////------------------------------------------------------
	function play(id){
		var oDiv=document.getElementById(id)
		var aBtn=oDiv.getElementsByTagName('button');//声明变量：找对象；
		var aImg=oDiv .getElementsByTagName('img');//声明变量：找对象；
		var i;
		var timer='';
		function run(n){//声明函数：干甚么得过程 一般是下达命令 和执行 命令的过程；
			for(var i=0;i<3;i++){//for循环：依靠循环，来找到每一个对象；
				aBtn[i].className='';
				aImg[i].style.display="none";
				}
				aBtn[n].className='ac';
				aImg[n].style.display="block";
		} 
		}
		aBtn[0].onclick=function(){run(0);};//触发事件：通过点击使得图片进行位移； 
		aBtn[1].onclick=function(){run(1);};//触发事件：通过点击使得图片进行位移； 
		aBtn[2].onclick=function(){run(2);};//触发事件：通过点击使得图片进行位移； 
											//现在我想让他自己动 并且 下面的标签颜色也跟着变化 并且循环；
											//1先让他自己动
		var n=0
		
		setInterval(function bian(){
					n++;
					if (n>=aImg.length) {n=0};	
					run(n);
				}	,2000)

	}
	