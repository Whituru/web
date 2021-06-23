const percentage = document.querySelector('.h1-percentage');	

var discharge = new Date(2022, 10, 14);	//월은 한달을 빼서 표기하는 것에 주의
var enlistment = new Date(2021, 1, 15);


function army_time() {

	var t = new Date(); //현재 시간
	var total = discharge - enlistment;	//총 복무기간


	var diffDate = t - enlistment;	//입대 후 시간
	var result = diffDate*100 / total; //밀리초 분 시간 하루 -> 하루로 만들어주기
	percentage.innerHTML = result.toFixed(7)+"%";
}

function init(){
	army_time();
	setInterval(army_time, 100);
}

init();