var phone2 = new Array();
phone2[0] = "151612323222"
phone2[1] = "180111122222"
phone2[2] = "15816322222"
phone2[3] = "1351314444"
phone2[4] = "1828622222"
phone2[5] = "1802422228"
phone2[6] = "18631222275"
phone2[7] = "183122222678"
phone2[8] = "158002222000"
phone2[9] = "1371222222487"

var phone3 = new Array();
phone3[0] = "15161584615"
phone3[1] = "18011111111"
phone3[2] = "1581635485"
phone3[3] = "13513154899"
phone3[4] = "1828647913"
phone3[5] = "18024631478"
phone3[6] = "18631549875"
phone3[7] = "18312345678"
phone3[8] = "15800000000"
phone3[9] = "13712365487"

var phone = new Array();
phone[0] = "15555555"
phone[1] = "185555551111"
phone[2] = "158555555485"
phone[3] = "13555555899"
phone[4] = "182855553"
phone[5] = "1805555578"
phone[6] = "186999995"
phone[7] = "1831000008"
phone[8] = "158888880"
phone[9] = "1371111111"

var phonetxt = $('.phone');
var phonetxt2= $('.phone2');
var phonetxt3= $('.phone3');
var pcount = phone.length-1;//参加人数
var runing = true;
var num = 0;
var t;
var td=0;
//开始停止
function start() {
	if (runing) {
		if(td==6) {
		     alert("投票结束")
		}else{
		  	 runing = false;
			$('#btntxt').removeClass('start').addClass('stop');
			$('#btntxt').html('停止');
			startNum()	
		}
		
	} else {
		runing = true;
		$('#btntxt').removeClass('stop').addClass('start');
		$('#btntxt').html('开始');
		stop();
		zd();//内定中奖
	}
}
//循环参加名单
function startNum() {
	num = Math.floor(Math.random() * pcount);
	phonetxt3.html(phone3[num]);
	phonetxt2.html(phone2[num]);
	phonetxt.html(phone[num]);
	t = setTimeout(startNum, 0);
}
//停止跳动
function stop() {
	pcount = phone.length-1;
	clearInterval(t);
	t = 0;
}
//从一等奖开始指定前3名
function zd() {
		//打印中奖者名单
		$('.list').append("<p>"+' '+phone[num]+"</p><p>"+' '+phone2[num]+"</p><p>"+' '+phone3[num]+"</p>");
		if(pcount <= 0){
			alert("投票结束");
		}
		//将已中奖者从数组中"删除",防止二次中奖
		phone.splice($.inArray(phone[num], phone), 1);
		phone2.splice($.inArray(phone2[num], phone2), 1);
		phone3.splice($.inArray(phone3[num], phone3), 1);
		td+=3;
}
