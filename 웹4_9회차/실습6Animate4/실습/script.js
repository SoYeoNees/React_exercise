/*
	1. 전체 #sushi-list의 width값을 계산하여 넣고 #sushi-list를 1줄로 만들어보세요.
	주의! 스시의 갯수가 늘어나면 늘어난 갯수만큼의 width값이 반영되어야 합니다.

	2. 스시들은 마우스 올릴때 opacity가 1이 되어야 하기 때문에 각각 스시들에 opcity를 0.5로 만들어보세요.
	
	3. 첫 페이지 방문시에 오른쪽에서 스시들이 순차적으로 나오고 있습니다.
	애니메이션을 주기위하여 스시들을 화면밖에 위치하게 해보세요.
	
	4. 스시들이 순차적으로 제자리에 오도록 만들어보세요.
	
	5. 각각 스시들에 마우스를 올리면 스시가 올라오도록 만들어보세요.

	6. .sushi-name을 안보이게 만들고
	각각의 스시에 마우스를 올리면 .sushi-name이 보이면서 그 스시에 맞게 텍스트를 바꿔보세요.

	7. .sushi-name을 각 스시에 맞는 위치에 있도록 해보세요.

	8. 스시들에 마우스를 떼면 원래도록 돌아오도록 만들어보세요.

	9. 화살표를 클릭시 좌우로 500px씩 이동하도록 해보세요.

	10. 화살표를 클릭시 만약 더이상 스시가 없다면 #sushi-list가 원래 위치값으로 돌아오도록 만들어보세요.

	
*/

// 1
/*
var liWidth = $('#sushi-list li').width();
// var count = $('#sushi-list li').size();
var count = $('#sushi-list li').length;
console.log(count);
var total = liWidth * count;
// var total = liWidth * 25;
$('#sushi-list').css('width', total);
*/

// 2
/*
var liWidth = $('#sushi-list li').width();
var count = $('#sushi-list li').length;
var total = liWidth * count;
$('#sushi-list').css('width', total);
$('#sushi-list li').css('opacity', 0.5);
*/

// 3
/*
var liWidth = $('#sushi-list li').width();
var count = $('#sushi-list li').length;
var total = liWidth * count;
$('#sushi-list').css('width', total);
$('#sushi-list li').css('opacity', 0.5);

var windowWidth = $(window).width();
$('#sushi-list li').css('left', windowWidth);
*/

// 4
/*
var liWidth = $('#sushi-list li').width();
var count = $('#sushi-list li').length;
var total = liWidth * count;
$('#sushi-list').css('width', total);
$('#sushi-list li').css('opacity', 0.5);

var windowWidth = $(window).width();
$('#sushi-list li').css('left', windowWidth);

$('#sushi-list li').each(function(index){
	// $(this).delay(100).animate({'left':0},2000);
	$(this).delay(100 * index).animate({'left':0},2000);
});
*/

// 5
/*
var liWidth = $('#sushi-list li').width();
var count = $('#sushi-list li').length;
var total = liWidth * count;
$('#sushi-list').css('width', total);
$('#sushi-list li').css('opacity', 0.5);

var windowWidth = $(window).width();
$('#sushi-list li').css('left', windowWidth);

$('#sushi-list li').each(function(index){
	$(this).delay(100 * index).animate({'left':0},2000);
});

$('#sushi-list li').on('mouseenter', function(){
	$(this).animate({top:0,opacity:1})
});
*/

// 6
/*
var liWidth = $('#sushi-list li').width();
var count = $('#sushi-list li').length;
var total = liWidth * count;
$('#sushi-list').css('width', total);
$('#sushi-list li').css('opacity', 0.5);

var windowWidth = $(window).width();
$('#sushi-list li').css('left', windowWidth);

$('#sushi-list li').each(function(index){
	$(this).delay(100 * index).animate({'left':0},2000);
});

$('.sushi-name').css('opacity', 0);
$('#sushi-list li').on('mouseenter', function(){
	$(this).animate({top:0,opacity:1});

	var nowTitle = $(this).children('img').attr('title');
	$('.sushi-name').text(nowTitle).stop().animate({'opacity': 1});
});
*/

// 7
/*
var liWidth = $('#sushi-list li').width();
var count = $('#sushi-list li').length;
var total = liWidth * count;
$('#sushi-list').css('width', total);
$('#sushi-list li').css('opacity', 0.5);

var windowWidth = $(window).width();
$('#sushi-list li').css('left', windowWidth);

$('#sushi-list li').each(function(index){
	$(this).delay(100 * index).animate({'left':0},2000);
});

$('.sushi-name').css('opacity', 0);
$('#sushi-list li').on('mouseenter', function(){
	$(this).animate({top:0,opacity:1});

	var nowTitle = $(this).children('img').attr('title');
	var nameP = $(this).position();
	console.log(nameP.left);
	$('.sushi-name').text(nowTitle).stop().animate({
		'left' : nameP.left,
		'opacity' : 1
	});

});
*/

// 8
/*
var liWidth = $('#sushi-list li').width();
var count = $('#sushi-list li').length;
var total = liWidth * count;
$('#sushi-list').css('width', total);
$('#sushi-list li').css('opacity', 0.5);

var windowWidth = $(window).width();
$('#sushi-list li').css('left', windowWidth);

$('#sushi-list li').each(function(index){
	$(this).delay(100 * index).animate({'left':0},2000);
});

$('.sushi-name').css('opacity', 0);
$('#sushi-list li').on('mouseenter', function(){
	$(this).animate({top:0,opacity:1});

	var nowTitle = $(this).children('img').attr('title');
	var nameP = $(this).position();
	console.log(nameP.left);
	$('.sushi-name').text(nowTitle).stop().animate({
		'left' : nameP.left,
		'opacity' : 1
	});
});

$('#sushi-list li').on('mouseleave', function(){
	$(this).animate({top:'100',opacity:0.5});
	$('.sushi-name').stop().animate({opacity:0});
});
*/

// 9
/*
var liWidth = $('#sushi-list li').width();
var count = $('#sushi-list li').length;
var total = liWidth * count;
$('#sushi-list').css('width', total);
$('#sushi-list li').css('opacity', 0.5);

var windowWidth = $(window).width();
$('#sushi-list li').css('left', windowWidth);

$('#sushi-list li').each(function(index){
	$(this).delay(100 * index).animate({'left':0},2000);
});

$('.sushi-name').css('opacity', 0);
$('#sushi-list li').on('mouseenter', function(){
	$(this).animate({top:0,opacity:1});

	var nowTitle = $(this).children('img').attr('title');
	var nameP = $(this).position();
	console.log(nameP.left);
	$('.sushi-name').text(nowTitle).stop().animate({
		'left' : nameP.left,
		'opacity' : 1
	});
});

$('#sushi-list li').on('mouseleave', function(){
	$(this).animate({top:'100',opacity:0.5});
	$('.sushi-name').stop().animate({opacity:0});
});

// $('#prev').on('click', function(){
// 	$('#sushi-list').stop().animate({'left':'-=500'});
// });

// $('#next').on('click', function(){
// 	$('#sushi-list').stop().animate({'left':'+=500'});
// });

$('#prev, #next').on('click', function(){
	var id = $(this).attr('id');
	var pos = '';

	if(id==='prev'){
		pos = '-=500';
	} else {
		pos = '+=500';
	}

	$('#sushi-list').stop().animate({'left':pos});
});
*/

// 10
var liWidth = $('#sushi-list li').width();
var count = $('#sushi-list li').length;
var total = liWidth * count;
$('#sushi-list').css('width', total);
$('#sushi-list li').css('opacity', 0.5);

var windowWidth = $(window).width();
$('#sushi-list li').css('left', windowWidth);

$('#sushi-list li').each(function(index){
	$(this).delay(100 * index).animate({'left':0},2000);
});

$('.sushi-name').css('opacity', 0);
$('#sushi-list li').on('mouseenter', function(){
	$(this).animate({top:0,opacity:1});

	var nowTitle = $(this).children('img').attr('title');
	var nameP = $(this).position();
	console.log(nameP.left);
	$('.sushi-name').text(nowTitle).stop().animate({
		'left' : nameP.left,
		'opacity' : 1
	});
});

$('#sushi-list li').on('mouseleave', function(){
	$(this).animate({top:'100',opacity:0.5});
	$('.sushi-name').stop().animate({opacity:0});
});

$('#prev, #next').on('click', function(){
	var id = $(this).attr('id');
	var pos = '';

	if(id==='prev'){
		pos = '-=500';
	} else {
		pos = '+=500';
	}

	$('#sushi-list').stop().animate({'left':pos}, function(){
		var windowWidth = $(window).width();
		var sushiWidth = $('#sushi-list').width();
		var aimPos = windowWidth - sushiWidth;
		console.log(aimPos);

		var pos = $('#sushi-list').position();
		console.log(pos.left);

		if(pos.left >0){
			$('#sushi-list').stop().animate({'left':0});
		} else if (pos.left < aimPos){
			$('#sushi-list').stop().animate({'left':aimPos});
		}
	});

});



function clickNext() {
    return new Promise((resolve) => {
		setTimeout(() => {
			$("#next").trigger("click");
			resolve();
		}, 1500);
    });
}

function clickPrev() {
    return new Promise((resolve) => {
        setTimeout(() => {
            $("#prev").trigger("click");
            resolve();
        }, 800);
    });
}
var index = 0

function hoverSushi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            $('#sushi-list li').eq(index).trigger("mouseenter");
            setTimeout(() => {
                $('#sushi-list li').eq(index).trigger("mouseleave");
                resolve();
				if(index == $('#sushi-list li').length){
					index=-1;
				}
				index++;
            }, 800);
        }, 1000);
    });
}

function mainSequence() {
    clickNext()
        .then(clickPrev)
        .then(clickNext)
        .then(hoverSushi);
}

setInterval(mainSequence, 5000);

setTimeout(function(){
	location.reload();
},20000)