/*
	1. .icons a를 클릭하였을때 active라는 class를 활성하고 나머지 .icons a는 비활성화해보세요.

	2. 
	디자이너 : .icons a를 클릭하였을때 슬라이드가 960크기 만큼 움직이게 해보세요.
	개발자 : .icons a를 클릭하였을때 .hero-slide li의 width값만큼 슬라이드가 움직이게 해보세요.

	3. 페이지 방문시에 첫번째 슬라이드가 active 되게 해보세요.

	4. prev와 next를 클릭시 동작되게 해보세요.

	5. prev와 next를 클릭시 슬라이드가 끝에 도달했을때 다시 처음이나 마지막 슬라이드로 가도록 만들어보세요.
	마지막 슬라이드에서 right 클릭 : 첫 슬라이드
	첫 슬라이드에서 left 클릭 : 마지막 슬라이드

	6. prev와 next를 하나의 click이벤트로 묶어서 작성해보세요.
	$('.prev, .next').click

	7. prev, next 이벤트와 .icons a를 연동시켜보세요.
	.icons a의 아무곳이나 클릭하고 prev, next 동작시에 다음 슬라이드로 잘 작동해야 합니다.

*/

// 1
$('.icons a').on('click', function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');

	// 2
	// var index = $(this).index();
	// $('.hero-slide').animate({ left : -960 * index });

	var index = $(this).index();
	var width = $('.hero-slide li').width();
	var result = width * index * -1;
	$('.hero-slide').animate({ left : result });

	// 7
	current = index;
});

// 3
$('.icons a').eq(0).trigger('click');

// 4
/*
var current = 0;
$('.prev').on('click', function(){
	current = current - 1;
	// 5
	if( current < 0 ){
		current = 4;
	}
	$('.icons a').eq(current).trigger('click');
});
$('.next').on('click', function(){
	current = current + 1;
	// 5
	if( current > 4 ){
		current = 0;
	}
	$('.icons a').eq(current).trigger('click');
});
*/

// 6
var current = 0;

$('.prev, .next').on('click', function(){
	var cl = $(this).attr('class');
	if( cl === 'prev'){
		current--;
	} else {
		current++;
	}

	if( current < 0 ){
		current = 4;
	}
	if( current > 4 ){
		current = 0;
	}
	$('.icons a').eq(current).trigger('click');

});