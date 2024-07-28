/*
	1. name1 변수를 생성
	
	2. name1 변수에 "짱구"를 넣으세요.

	3. age1 변수를 생성하고 5를 넣으세요.

*/
var name1;
name1 = "짱구";
var age1 = 5;

var name2;
name2 = "짱아";
var age2 = 3;

var name3;
name3 = "철수";
var age3 = 6;

/*
	theBtn1 변수를 생성하고 클래스 cha1을 theBtn1 변수에 넣으세요.

*/

var theBtn1 = document.querySelector(".cha1");
var theBtn2 = document.querySelector(".cha2");
var theBtn3 = document.querySelector(".cha3");

/*
	
	theBtn1 변수를 클릭하면 h1이 name1 변수로 바뀌는 
	함수를 만드세요.
		
		Hint.
		
		- h1을 선택하는 방법
		document.querySelector("h1")
		
		- h1의 값을 선택하는 방법
		document.querySelector("h1").innerHTML


		함수란?
		특별한 목적의 작업을 수행하도록 설계된 하나의 실행단위
*/

theBtn1.addEventListener("click", function () {
	document.querySelector("h1").innerHTML = name1;
	document.querySelector("h3").innerHTML = age1;
});
theBtn2.addEventListener("click", function () {
	document.querySelector("h1").innerHTML = name2;
	document.querySelector("h3").innerHTML = age2;
});
theBtn3.addEventListener("click", function () {
	document.querySelector("h1").innerHTML = name3;
	document.querySelector("h3").innerHTML = age3;
});
