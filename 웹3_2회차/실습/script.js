/*
	이상해씨 - 이상해풀 - 이상해꽃
	파이리 - 리자드 - 리자몽
	꼬부기 - 어니부기 - 거북왕

	1. level1 변수를 생성
	2. level1 변수에 이상해씨를 넣으세요.
	3. 만약 레벨이 10이상이면 1번 진화 / 레벨이 20 이상이면 2번 진화하게 만드세요

	if ( 이 안에 TRUE를 넣으면 중괄호안의 코드들이 실행 ) {

		- 이미지 소스 변경하는 코드
		document.getElementById("id").src = 'url' 적기
		콘솔창에 document.getElementById("id").src 입력
		url에는 img경로 적기

		- 캐릭터 이름도 같이 변경해주세요

	}

	if (parseInt(level2.innerHTML) > 10) {
	}
	이상해씨는 레벨 23
	파이리는 레벨 14
	꼬부기는 레벨 7

	document.querySelector() 대신에

	document.getElementById("id")를 사용하세요.
	- id를 선택할 수 있음
	- #은 제외하고 id만 " "안에 입력
*/

var level1 = document.getElementById("level1");

// 10 이상
if (parseInt(level1.innerHTML) >= 10) {
	document.getElementById("name1").innerHTML = "이상해풀";
	document.getElementById("cha1").src = "icon01_2.png"
}
// 20 이상
if (parseInt(level1.innerHTML) >= 20) {
	document.getElementById("name1").innerHTML = "이상해씨";
	document.getElementById("cha1").src = "icon01_3.png"
}

// 10 이상
if (parseInt(level2.innerHTML) >= 10) {
	document.getElementById("name2").innerHTML = "리자드";
	document.getElementById("cha2").src = "icon02_2.png"
}
// 20 이상
if (parseInt(level2.innerHTML) >= 20) {
	document.getElementById("name2").innerHTML = "리자몽";
	document.getElementById("cha2").src = "icon02_3.png"
}

// 10 이상
if (parseInt(level3.innerHTML) >= 10) {
	document.getElementById("name3").innerHTML = "어니부기";
	document.getElementById("cha3").src = "icon03_3.png"
}
// 20 이상
if (parseInt(level3.innerHTML) >= 20) {
	document.getElementById("name3").innerHTML = "거북왕";
	document.getElementById("cha3").src = "icon03_3.png"
}


