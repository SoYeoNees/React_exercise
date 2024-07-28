/*
	1. 각 캐릭터 정보를 담는 변수를 4개 생성하세요.
	변수에는 캐릭터의 이름, 직업, css(슬라이드 위치값)이 들어가야 합니다.

	2. 변수 4개를 하나의 배열에 넣으세요.

	3. 각 버튼 .mu-list li를 클릭시에 name과 job 바뀌도록 만들어보세요.

	4. 각 버튼 .mu-list li를 클릭시에 이미지도 바뀌도록 만들어보세요.

	5. 페이지 방문시에 현재 job, name이 나오고 있습니다.
	페이지 방문시에 자동으로 .mu-list li의 첫번째가 클릭되어있도록 만들어보세요.

	6. left와 right 클릭시 하나씩 움직이게 만들어보세요.
	!단, 위의 .mu-list li와는 연동이 되지 않아도 됩니다.

	7. left와 right 클릭시 슬라이드가 끝에 도달했을때 다시 처음이나 마지막 슬라이드로 가도록 만들어보세요.
	마지막 슬라이드에서 right 클릭 : 첫 슬라이드
	첫 슬라이드에서 left 클릭 : 마지막 슬라이드

	[ 디자이너는 여기까지! ]

	8. left와 right를 하나의 click이벤트로 묶어서 작성해보세요.
	$('.left, .right').click

	9. 이미지와 배열의 개수가 늘어나도 동작하도록 만들어야 합니다.
	html 파일에 .mu-list에 li하나를 더 추가해보고 변수도 하나 더 늘려봅시다.

*/

var mario = {
	job : 'Red Hero',
	name : 'Mario',
	profile : {'background-position':0},
};

var luigi = {
	job : 'Green Hero',
	name : 'Luigi',
	profile : {'background-position':-200},
};

var kino = {
	job : 'Mushroom',
	name : 'Kino',
	profile : {'background-position':-400},
};

var peach = {
	job : 'Pricess',
	name : 'Peach',
	profile : {'background-position':-600},
};

var arr = [mario, luigi, kino, peach];

// 3
$('#mu-list li').on('click', function(){
	var index = $(this).index();
	var job = arr[index].job;
	var name = arr[index].name;
	var profile = arr[index].profile;

	$('.job').text(job);
	$('.name').text(name);

	// 4
	$('.picture').animate(profile);
});

// 5
$('#mu-list li').eq(0).trigger('click');

// 6
/*
var current = 0;

$('.left').on('click', function(){
	current = current - 1;
	$('#mu-list li').eq(current).trigger('click');
});

$('.right').on('click', function(){
	current = current + 1;
	$('#mu-list li').eq(current).trigger('click');
});
*/

// 7
/*
var current = 0;

$('.left').on('click', function(){
	current = current - 1;
	if(current < 0){
		current = 3;
	}
	$('#mu-list li').eq(current).trigger('click');
});

$('.right').on('click', function(){
	current = current + 1;
	if(current > 3){
		current = 0;
	}
	$('#mu-list li').eq(current).trigger('click');
});
*/

// 8 
var current = 0;

$('.left, .right').on('click', function(){
	var muClass = $(this).attr('class');

	if(muClass === 'left') {
		current = current - 1;
	} else {
		current = current + 1;
	}

	/*
	if(current < 0){ current = 3; }
	if(current > 3){ current = 0; }
	*/
	// 9
	var length = arr.length - 1;
	if(current < 0){ current = length; }
	if(current > length){ current = 0; }

	$('#mu-list li').eq(current).trigger('click');

});