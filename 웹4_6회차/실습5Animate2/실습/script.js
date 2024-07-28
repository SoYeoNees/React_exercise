/*

	1. 각각의 캐릭터(.face안의 li)에 순차적인 이벤트를 주세요.
	새로고침 시에 마리오 -> 키노피오 -> 루이지가 파이프에 들어가도록 하면 됨

	2. 파이프 클릭 시에 클릭한 파이프에 클래스 active를 더하세요.
	-> 코드를 간략하게 묶어보세요.

	3. 파이프 클릭 시 .contents li가 나타나게 해보세요.

	4. 파이프 클릭 시 .contents의 높이를 188로 주세요.

	5. 만약 .contents의 height 값이 유동적으로 바뀐다면?
	키노피오 이미지의 height 값은 나머지와 다르기 때문에 캐릭터 이미지의 높이값만큼
	.contents의 높이가 바뀌게 해보세요. [디자이너는 안해도됨]

	6. 파이플 클릭 시 각각의 캐릭터(.face안의 li)가 나왔다가 들어가는 애니메이션을 만들어보세요.

	7. 처음 페이지 방문 시에 아무것도 클릭이 안되어있는 상태입니다.
	강제로 첫번째 파이프를 클릭하게 만드세요.
*/

// 1
$('.face li').eq(0).animate({ top: 200 }, 500);
$('.face li').eq(1).delay(200).animate({ top: 200 }, 500);
$('.face li').eq(2).delay(200).animate({ top: 200 }, 500);

// 2
/*
$('.tabs li').eq(0).click(function () {
	$('.tabs li').eq(0).addClass('active');
	$('.tabs li').eq(1).removeClass('active');
	$('.tabs li').eq(2).removeClass('active');
})
*/
/*
$('.tabs li').on('click', function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
})
*/

// 3
/*
$('.tabs li').on('click', function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');

	var index = $(this).index(); // index(순번)를 가져오는 메서드
	console.log(index);

	// $('.contents li').eq(0).fadeIn();
	$('.contents li').eq(index).siblings().fadeOut();
	$('.contents li').eq(index).fadeIn();
})
*/

// 4
/*
$('.tabs li').on('click', function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');

	var index = $(this).index(); // index(순번)를 가져오는 메서드
	console.log(index);

	// $('.contents li').eq(0).fadeIn();
	$('.contents li').eq(index).siblings().fadeOut();
	$('.contents li').eq(index).fadeIn();

	$('.contents').height(188);
})
*/

// 5
$('.tabs li').on('click', function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');

	var index = $(this).index(); // index(순번)를 가져오는 메서드
	console.log(index);

	// $('.contents li').eq(0).fadeIn();
	$('.contents li').eq(index).siblings().fadeOut();
	$('.contents li').eq(index).fadeIn();

	var targetHeight = $('.contents li').eq(index).height();
	$('.contents').css('height', targetHeight);

	$('.face li').eq(index).animate({ top: 0 }, 500, function () {
		$(this).animate({ top: 200 }, 500);
	})
});


// 7
$('.tabs li').eq(0).trigger('click');
