/*
	setInterval을 사용하여
	wally의 키가 계속 크도록 만드세요.

	만약 wally의 키가 210이 된다면 원래대로 되돌아오도록 만드세요.
	키 Default값 160

	document.querySelector().style.height = num + 'px'

*/
var f2 = function () {
  document.querySelector().style.height = num + "px";
};
window.setInterval(f2, 1000);

var add = function () {
  if (count == 210) {
    return; // 함수 종료
  }
  f2 = f2 + 1;
  document.querySelector("#height").innerHTML = f2;
};
