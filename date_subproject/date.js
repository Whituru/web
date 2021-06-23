var t = new Date(); //현재 시간
var theDate = new Date(2018, 10, 3);
var diffDate = t - theDate;
var result = Math.ceil(diffDate / (60*1000*60*24)); //밀리초 분 시간 하루 -> 하루로 만들어주기
document.write(result);