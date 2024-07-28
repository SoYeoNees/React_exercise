/*
	1. key 변수를 생성하고 num값 185를 넣으세요.

	2. update라는 이름의 함수를 만드세요.

	- update함수안에는 이러한 기능이 들어가야 합니다.

	#height의 text가 key의 값 + 'CM'으로 변경.
		
		Hint.
		innerText

	
	#leg의 height 값이 key 값으로 변경.

		Hint.
		style.height

	- update함수 실행하는 법 : update()
*/

/*
	3. if else문을 사용하여 update함수안에
	- 키가 160이하면 #face에 클래스 cry를 추가
	- 나머지는 #face에 클래스 cry를 제거

	if ( 조건문 ) {
	실행문1
	} else {
	실행문2
	}
		Hint.
		document.getElementById("아이디명").classList.add("cry")
		document.getElementById("아이디명").classList.remove("cry")



	3. #arr-top를 클릭하면 key가 i만큼 증가하는 함수를 만드세요.
		- for문 사용하지 않고 만들기

	4. #arr-bottom를 클릭하면 key가 i만큼 감소하는 함수를 만드세요.
		- for문 사용안해도 가능한데 for문에 담아서 코드를 한번 만들어보세요.

	5. 키가 1씩 커지는게 너무 지루하다면 3씩 증감하도록 바꿔보세요.
		- #arr-top과 #arr-bottom, 각각 for문 썼을때 안썼을 때 어떻게 바꿔야할지 생각해보세요.

	6. 키가 1씩 커지는게 너무 지루하다면 5씩 증감하도록 바꿔보세요.
		- #arr-top과 #arr-bottom, 각각 for문 썼을때 안썼을 때 어떻게 바꿔야할지 생각해보세요.

*/
var key = 185;

update();

document.getElementById("arr-top").addEventListener("click", function () {
  key = key + 5;
  update();
});

document.getElementById("arr-bottom").addEventListener("click", function () {
  //   for (var i = 5; i < 6; i++) {
  //     key = key - i;
  //     console.log(i);
  //     console.log(key);
  //   }

  for (var i = 2; i < 4; i++) {
    key = key - i;
    console.log(i);
    console.log(key);
  }
  update();
});

function update() {
  document.getElementById("height").innerText = key + "CM";
  document.getElementById("leg").style.height = key + "px";

  if (key < 160) {
    document.getElementById("face").classList.add("cry");
  } else {
    document.getElementById("face").classList.remove("cry");
  }
}
