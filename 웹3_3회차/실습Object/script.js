/*
	이상해씨 - 이상해풀 - 이상해꽃
	파이리 - 리자드 - 리자몽
	꼬부기 - 어니부기 - 거북왕

	1. poke1 오브젝트 변수를 생성
	2. poke1 오브젝트안에 name1과 level1을 만들어 이상해씨의 레벨을 넣으세요.
	3. 만약 레벨이 10이상이면 1번 진화 / 레벨이 20 이상이면 2번 진화하게 만드세요
	
	if ( 이 안에 TRUE를 넣으면 중괄호안의 문구들이 발동함 ) {
		- 이미지 소스 변경 자바스크립트
		ID선택.src = '../url/url.png'
		background :url ('../url/url.png')
		
		- 캐릭터 이름도 같이 변경해주세요

	}

	- document.getElementById("id")를 사용하세요.
	- HTML에서 이상해씨, 파이리, 꼬부기의 레벨을 바꿔서 진화하는지 확인해보세요.
*/
var poke1 = {
	name: document.getElementById('name1'),
	level: document.getElementById('level1'),
	img: document.getElementById('cha1')
};

// 10 이상
if (parseInt(poke1.level.innerHTML) >= 10) {
	poke1.name.innerHTML = '이상해풀';
	poke1.img.src = 'icon01_2.png';
}

// 20 이상
if (parseInt(poke1.level.innerHTML) >= 20) {
	poke1.name.innerHTML = '이상해꽃';
	poke1.img.src = 'icon01_3.png';
}

var poke2 = {
	name: document.getElementById('name2'),
	level: document.getElementById('level2'),
	img: document.getElementById('cha2')
};


// 10 이상
if (parseInt(poke2.level.innerHTML) >= 10) {
	poke2.name.innerHTML = '리자드';
	poke2.img.src = 'icon02_2.png';
}

// 20 이상
if (parseInt(poke2.level.innerHTML) >= 20) {
	poke2.name.innerHTML = '리자몽';
	poke2.img.src = 'icon02_3.png';
}

var poke3 = {
	name: document.getElementById('name3'),
	level: document.getElementById('level3'),
	img: document.getElementById('cha3')
};

// 10 이상
if (parseInt(poke3.level.innerHTML) >= 10) {
	poke3.name.innerHTML = '어니부기';
	poke3.img.src = 'icon03_2.png';
}

// 20 이상
if (parseInt(poke3.level.innerHTML) >= 20) {
	poke3.name.innerHTML = '거북왕';
	poke3.img.src = 'icon03_3.png';
}
