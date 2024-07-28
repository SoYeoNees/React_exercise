/*
	1. .tt를 클릭하면 클릭한 .tt요소안에 h2에 open 클래스가 붙도록 만드세요.

	2. .tt를 클릭하면 클릭한 .tt요소안에 h2에만 open 클래스가 붙고 나머지는 없어지게 만들어보세요.

	3. .tt를 클릭하면 클릭한 .tt요소의 아코디언 메뉴가 아래로 열리게 해보세요.

	4. .tt를 클릭하면 클릭한 .tt요소의 아코디언 메뉴만 열리고 나머지는 닫히게 해보세요.

	5. .tt를 클릭하면 나머지 이미지 요소는 안보이고 클릭한 .tt요소의 이미지만 생성되게 해보세요.

	[ 여기까지가 디자이너들 목표! ]

	6. this를 활용하면 전체 코드를 10줄미만으로 작성가능합니다. 코드를 간략하게 만들어보세요.
*/

// 1
/*
$('.tt').eq(0).click(function(){
	$('.tt').eq(0).children('h2').addClass('open');
});
$('.tt').eq(1).click(function(){
	$('.tt').eq(1).children('h2').addClass('open');
});
$('.tt').eq(2).click(function(){
	$('.tt').eq(2).children('h2').addClass('open');
});
$('.tt').eq(3).click(function(){
	$('.tt').eq(3).children('h2').addClass('open');
});
*/

/*2, 3, 4
$('.tt').eq(0).click(function () {
	$('.tt').eq(0).children('h2').addClass('open');
	$('.tt').eq(1).children('h2').removeClass('open');
	$('.tt').eq(2).children('h2').removeClass('open');
	$('.tt').eq(3).children('h2').removeClass('open');

	$('.tt').eq(0).children('h2').next().slideDown();
	$('.tt').eq(1).children('h2').next().slideUp();
	$('.tt').eq(2).children('h2').next().slideUp();
	$('.tt').eq(3).children('h2').next().slideUp();
});
$('.tt').eq(1).click(function () {
	$('.tt').eq(1).children('h2').addClass('open');
	$('.tt').eq(0).children('h2').removeClass('open');
	$('.tt').eq(2).children('h2').removeClass('open');
	$('.tt').eq(3).children('h2').removeClass('open');

	$('.tt').eq(1).children('h2').next().slideDown();
	$('.tt').eq(0).children('h2').next().slideUp();
	$('.tt').eq(2).children('h2').next().slideUp();
	$('.tt').eq(3).children('h2').next().slideUp();
});
$('.tt').eq(2).click(function () {
	$('.tt').eq(2).children('h2').addClass('open');
	$('.tt').eq(0).children('h2').removeClass('open');
	$('.tt').eq(1).children('h2').removeClass('open');
	$('.tt').eq(3).children('h2').removeClass('open');

	$('.tt').eq(2).children('h2').next().slideDown();
	$('.tt').eq(1).children('h2').next().slideUp();
	$('.tt').eq(0).children('h2').next().slideUp();
	$('.tt').eq(3).children('h2').next().slideUp();
});
$('.tt').eq(3).click(function () {
	$('.tt').eq(3).children('h2').addClass('open');
	$('.tt').eq(0).children('h2').removeClass('open');
	$('.tt').eq(1).children('h2').removeClass('open');
	$('.tt').eq(2).children('h2').removeClass('open');

	$('.tt').eq(3).children('h2').next().slideDown();
	$('.tt').eq(1).children('h2').next().slideUp();
	$('.tt').eq(2).children('h2').next().slideUp();
	$('.tt').eq(0).children('h2').next().slideUp();
});
*/

// 5
/*
$('.tt').eq(0).click(function () {
	$('.tt').eq(0).children('h2').addClass('open');
	$('.tt').eq(1).children('h2').removeClass('open');
	$('.tt').eq(2).children('h2').removeClass('open');
	$('.tt').eq(3).children('h2').removeClass('open');

	$('.tt').eq(0).children('h2').next().slideDown();
	$('.tt').eq(1).children('h2').next().slideUp();
	$('.tt').eq(2).children('h2').next().slideUp();
	$('.tt').eq(3).children('h2').next().slideUp();

	$('.tt').eq(0).children('h2').prev().fadeIn();
	$('.tt').eq(1).children('h2').prev().fadeOut();
	$('.tt').eq(2).children('h2').prev().fadeOut();
	$('.tt').eq(3).children('h2').prev().fadeOut();
});
$('.tt').eq(1).click(function () {
	$('.tt').eq(1).children('h2').addClass('open');
	$('.tt').eq(0).children('h2').removeClass('open');
	$('.tt').eq(2).children('h2').removeClass('open');
	$('.tt').eq(3).children('h2').removeClass('open');

	$('.tt').eq(1).children('h2').next().slideDown();
	$('.tt').eq(0).children('h2').next().slideUp();
	$('.tt').eq(2).children('h2').next().slideUp();
	$('.tt').eq(3).children('h2').next().slideUp();

	$('.tt').eq(1).children('h2').prev().fadeIn();
	$('.tt').eq(0).children('h2').prev().fadeOut();
	$('.tt').eq(2).children('h2').prev().fadeOut();
	$('.tt').eq(3).children('h2').prev().fadeOut();
});
$('.tt').eq(2).click(function () {
	$('.tt').eq(2).children('h2').addClass('open');
	$('.tt').eq(0).children('h2').removeClass('open');
	$('.tt').eq(1).children('h2').removeClass('open');
	$('.tt').eq(3).children('h2').removeClass('open');

	$('.tt').eq(2).children('h2').next().slideDown();
	$('.tt').eq(1).children('h2').next().slideUp();
	$('.tt').eq(0).children('h2').next().slideUp();
	$('.tt').eq(3).children('h2').next().slideUp();

	$('.tt').eq(2).children('h2').prev().fadeIn();
	$('.tt').eq(1).children('h2').prev().fadeOut();
	$('.tt').eq(0).children('h2').prev().fadeOut();
	$('.tt').eq(3).children('h2').prev().fadeOut();
});
$('.tt').eq(3).click(function () {
	$('.tt').eq(3).children('h2').addClass('open');
	$('.tt').eq(0).children('h2').removeClass('open');
	$('.tt').eq(1).children('h2').removeClass('open');
	$('.tt').eq(2).children('h2').removeClass('open');

	$('.tt').eq(3).children('h2').next().slideDown();
	$('.tt').eq(1).children('h2').next().slideUp();
	$('.tt').eq(2).children('h2').next().slideUp();
	$('.tt').eq(0).children('h2').next().slideUp();

	$('.tt').eq(3).children('h2').prev().fadeIn();
	$('.tt').eq(0).children('h2').prev().fadeOut();
	$('.tt').eq(1).children('h2').prev().fadeOut();
	$('.tt').eq(2).children('h2').prev().fadeOut();
});
*/

// 6
$('.tt').on('click', function () {
	var me = $(this).children('h2')
	var bro = $(this).siblings().children('h2')

	me.addClass('open');
	bro.removeClass('open');

	me.next().slideDown();
	bro.next().slideUp();

	me.prev().fadeIn();
	bro.prev().fadeOut();
})