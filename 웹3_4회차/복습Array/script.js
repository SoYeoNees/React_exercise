/*
	이상해씨 - 이상해풀 - 이상해꽃
	파이리 - 리자드 - 리자몽
	꼬부기 - 어니부기 - 거북왕

	1. pokeName 변수를 생성
	2. pokeName 안에 배열로 ID값 name1, name2, name3를 가져오세요.

	3. pokeLevel 변수를 생성
	4. pokeLevel 안에 배열로 Class값 level1, level2, level3를 가져오세요.
	-> document.getElementsByClassName('클래스명') 사용하세요.

	5. pokeImg 변수를 생성
	6. pokeImg 안에 배열로 Class값 cha1, cha2, cha3를 가져오세요.
	-> document.getElementsByClassName('클래스명') 사용하세요.


	3. 만약 레벨이 10이상이면 1번 진화 / 레벨이 20 이상이면 2번 진화하게 만드세요
	
	if ( 이 안에 TRUE를 넣으면 중괄호안의 문구들이 발동함 ) {
		- 이미지 소스 변경 자바스크립트
		ID선택.src = url 적기
		
		- 캐릭터 이름도 같이 변경해주세요

	}
*/

var pokeName = [
	document.getElementById('name1'),
	document.getElementById('name2'),
	document.getElementById('name3')
]


var pokeLevel =
	[document.getElementsByClassName('level1'),
	document.getElementsByClassName('level2'),
	document.getElementsByClassName('level3')]


var pokeImg = [
	document.getElementsByClassName('cha1'),
	document.getElementsByClassName('cha2'),
	document.getElementsByClassName('cha3')
]

// 10 이상
if (parseInt(pokeLevel[0][0].innerHTML) >= 10) {
	var poke = pokeImg[0];
	poke[0].src = 'icon01_2.png';
	// pokeImg[0][0].src = 'icon01_2.png';
	pokeName[0].innerHTML = '이상해풀';
}

// 20 이상
if (parseInt(pokeLevel[0][0].innerHTML) >= 20) {
	var poke = pokeImg[0];
	poke[0].src = 'icon01_3.png';
	// pokeImg[0][0].src = 'icon01_2.png';
	pokeName[0].innerHTML = '이상해꽃';
}


// 10 이상
if (parseInt(pokeLevel[0][0].innerHTML) >= 10) {
	var poke = pokeImg[0];
	poke[0].src = 'icon01_2.png';
	// pokeImg[0][0].src = 'icon01_2.png';
	pokeName[0].innerHTML = '이상해풀';
}

// 20 이상
if (parseInt(pokeLevel[0][0].innerHTML) >= 20) {
	var poke = pokeImg[0];
	poke[0].src = 'icon01_3.png';
	// pokeImg[0][0].src = 'icon01_2.png';
	pokeName[0].innerHTML = '이상해꽃';
}