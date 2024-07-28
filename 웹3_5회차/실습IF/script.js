/*
	이상해씨 - 이상해풀 - 이상해꽃
	파이리 - 리자드 - 리자몽
	꼬부기 - 어니부기 - 거북왕

	1. pokeName 변수를 생성
	2. pokeName 안에 배열로 ID값 name1, name2, name3를 가져오세요.

	3. pokeLevel 변수를 생성
	4. pokeLevel 안에 배열로 Class값 level1, level2, level3를 가져오세요.

	5. pokeImg변수를 생성
	6. pokeImg 안에 배열로 Class값 cha1, cha2, cha3를 가져오세요.

	7. 만약 레벨이 10이상이면 1번 진화 / 레벨이 20 이상이면 2번 진화하게 만드세요

	8. 포켓몬 이미지를 클릭하면 레벨이 5씩 증가하게 만드세요.

	9. 만약 모두가 최종진화를 했다면 로고를 logo2.png로 바꾸세요.

	
*/

var pokeName = [
  document.getElementById("name1"),
  document.getElementById("name2"),
  document.getElementById("name3"),
];

var pokeLevel = [
  document.getElementsByClassName("level1"),
  document.getElementsByClassName("level2"),
  document.getElementsByClassName("level3"),
];

var pokeImg = [
  document.getElementsByClassName("cha1"),
  document.getElementsByClassName("cha2"),
  document.getElementsByClassName("cha3"),
];

// pokeImg[0][0].addEventListener("click", function () {
// 	var currentLevel = pokeLevel[0][0].innerHTML;
// 	pokeLevel[0][0].innerHTML = parseInt(currentLevel) + 5;
// 	if (parseInt(pokeLevel[0][0].innerHTML) >= 20) {
// 	  pokeImg[0][0].src = "icon01_3.png";
// 	  pokeName[0].innerHTML = "이상해꽃";
// 	} else if (parseInt(pokeLevel[0][0].innerHTML) >= 10) {
// 	  pokeImg[0][0].src = "icon01_2.png";
// 	  pokeName[0].innerHTML = "이상해풀";
// 	}
//   });

var count = parseInt(pokeLevel[0][0].innerHTML);
var theBtn1 = pokeImg[0][0];
theBtn1.addEventListener("click", function () {
  count = count + 5;
  document.querySelector(".level1").innerHTML = count;
  if (parseInt(pokeLevel[0][0].innerHTML) >= 20) {
    pokeImg[0][0].src = "icon01_3.png";
    pokeName[0].innerHTML = "이상해꽃";
  } else if (parseInt(pokeLevel[0][0].innerHTML) >= 10) {
    pokeImg[0][0].src = "icon01_2.png";
    pokeName[0].innerHTML = "이상해풀";
  }
  if (
    pokeName[0].innerHTML == "이상해꽃" &&
    pokeName[1].innerHTML == "리자몽" &&
    pokeName[2].innerHTML == "거북왕"
  ) {
    document.getElementsByClassName("logo")[0].src = "logo2.png";
  }
});

pokeImg[1][0].addEventListener("click", function () {
  var currentLevel = pokeLevel[1][0].innerHTML;
  pokeLevel[1][0].innerHTML = parseInt(currentLevel) + 5;
  if (parseInt(pokeLevel[1][0].innerHTML) >= 20) {
    pokeImg[1][0].src = "icon02_3.png";
    pokeName[1].innerHTML = "리자몽";
  } else if (parseInt(pokeLevel[1][0].innerHTML) >= 10) {
    pokeImg[1][0].src = "icon02_2.png";
    pokeName[1].innerHTML = "리자드";
    if (
      pokeName[0].innerHTML == "이상해꽃" &&
      pokeName[1].innerHTML == "리자몽" &&
      pokeName[2].innerHTML == "거북왕"
    ) {
      document.getElementsByClassName("logo")[0].src = "logo2.png";
    }
  }
});

pokeImg[2][0].addEventListener("click", function () {
  var currentLevel = pokeLevel[2][0].innerHTML;
  pokeLevel[2][0].innerHTML = parseInt(currentLevel) + 5;
  if (parseInt(pokeLevel[2][0].innerHTML) >= 20) {
    pokeImg[2][0].src = "icon03_3.png";
    pokeName[2].innerHTML = "거북왕";
  } else if (parseInt(pokeLevel[2][0].innerHTML) >= 10) {
    pokeImg[2][0].src = "icon03_2.png";
    pokeName[2].innerHTML = "어니부기";
  }
  if (
    pokeName[0].innerHTML == "이상해꽃" &&
    pokeName[1].innerHTML == "리자몽" &&
    pokeName[2].innerHTML == "거북왕"
  ) {
    document.getElementsByClassName("logo")[0].src = "logo2.png";
  }
});

/*
	if(이상해씨 innerHTML이 이상해꽃 AND
		파이리 innerHTML이 리자몽 AND
		꼬부기 innerHTML이 거북왕 AND){
			이미지 바꾸는 실행문
		}
*/
