var logo = document.getElementById('logo');
var imgBox = document.getElementById('menu');


setInterval(myFunc, 2000);

function myFunc(){
	/*
	setInterval과 setTimeout을 사용하여 로고가 2초마다 깜빡이도록 해보세요.
	
	이 안에 클래스
	opacity-0
	opacity-1
	을 활용하여 만들면 됩니다.
	*/

	
}


imgBox.children[0].addEventListener('click', function(){
	// 첫번째 캐릭터를 클릭하면 alert창으로 그 캐릭터의 이름이 뜨도록 만드세요.

})


imgBox.children[1].addEventListener('click', function(){
	// 두번째 캐릭터를 클릭하면 그 캐릭터가 사라지도록 해보세요.

})


imgBox.children[2].addEventListener('click', function(){
	// 세번째 캐릭터를 클릭하면 캐릭터 이름에 주소창이 출력되도록 해보세요.

})