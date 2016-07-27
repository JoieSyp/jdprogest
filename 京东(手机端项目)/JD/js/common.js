//确定是4位验证码
//动态生成数字
		function  changeIdenfy(){
			var arr=[];
			buildNum=randomNum(0,4);   //数字有多少个  全局变量为了使其他函数访问
			for(var i=0;i<buildNum;i++){
				var num=randomNum(0,9);
				arr.push(num);
			}
			
			return arr;
		}
//动态生成字母
		function changeLetter(array){
			var letterArr=null;
			var arrLetter=[];
			var buildLetter=4-buildNum;	//字母位数
			for (var i=0;i<buildLetter;i++) {
				var index=randomNum(0,array.length);  //随机获取下标   （数组是字母数组）
                letterArr=array[index];             //变量存储所获得随意字母
                arrLetter.push(letterArr);      //获取字母的数组
			}
			return arrLetter;
		}
		//这个是指动态生成的数字和字母
		//第二个作用 动态产生生成几个字母和数字  字母的个数>=1 数字的个数>=1
		function randomNum(min,max){
	       return parseInt(Math.random(min,max)*(max-min));
        }
		
		