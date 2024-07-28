/*
	1. 선반을 클릭하면 선반이 사라지게 만들어보세요.

	2. 총을 클릭하면 끝에서부터 캐릭터가 사라지게 만드세요.

	3. 돈을 클릭하면 돈은 사라지고 모든 인형이 다시 나오게 만드세요.

	4. 총이 아닌 img를 클릭할때도 총이 변하게 해보세요.
*/

// 2
var index = 11;
$('.gun').on('click', function () {
	/*
		eq가 점점 감소해야함
		$('.sunban li img').eq(11).fadeOut();
	*/
	$('.sunban li img').eq(index).fadeOut();
	index--;
})

// 1
$('.sunban li img').on('click', function () {
	$(this).fadeOut();
});


// 4
$('.sunban li img').mousedown(function () {
	$('.gun').css('background-position', 'bottom');
});

$('.sunban li img').mouseup(function () {
	$('.gun').css('background-position', 'top');
});


// 3
$('.money li').on('click', function () {
	$(".sunban li img").fadeIn();
	$('this').fadeOut();
	index = 11;
})