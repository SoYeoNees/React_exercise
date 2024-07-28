/*

	1. 각 .nav a를 클릭시에 해당 nav에 맞는 제품들이 순차적인 애니메이션을 가지며 위에서 아래로 내려오게 만들어보세요.
	
	2. 각 .nav a를 클릭시에 해당 nav에 맞는 제품이 아닌 나머지 제품들은 순차적인 애니메이션을 가지며 다시 위로 올려보세요.

	3. 문제발생!
	각 .nav a를 빠르게 클릭하면 제품이 나오는 애니메이션이 끝나지 않았는데 다른 애니메이션들이 꼬이며 진행되게 됩니다.
	이 부분을 해결해보세요. [디자이너들은 안해도됨]

	4. 페이지 방문시에 가방이 제일 먼저 나오게 만들어보세요. 

	5. .nav a에 마우스를 올리면 빨간선이 그 .nav a요소 위에 올라가도록 만드세요.

	6. 빨간선의 길이도 .nav a의 길이 만큼 맞춰지게 만들어보세요.

*/

// 1
/*
$('.nav a').on('click', function(){
	// var thisList = $('.box li').eq(0);
	var index = $(this).index();
	var thisList = $('.box li').eq(index);
	
	thisList.children('img').each(function(i){
		$(this).delay(i*100).animate({'top':0, opacity:1});
	})
});
*/

// 2
/*
$('.nav a').on('click', function(){
	var index = $(this).index();
	var thisList = $('.box li').eq(index);
	var broList = $('.box li').eq(index).siblings();
	
	thisList.children('img').each(function(i){
		$(this).delay(i*100).animate({'top':0, opacity:1});
	});

	broList.children('img').each(function(i){
		$(this).delay(i*50).animate({'top':-230, opacity:0});
	});
});
*/

// 3
$('.nav a').on('click', function(){
	var check = $('.box img').is(':animated');
	if(check === true) { 
		return;
	}

	var index = $(this).index();
	var thisList = $('.box li').eq(index);
	var broList = $('.box li').eq(index).siblings();
	
	thisList.children('img').each(function(i){
		$(this).delay(i*100).animate({'top':0, opacity:1});
	});

	broList.children('img').each(function(i){
		$(this).delay(i*50).animate({'top':-230, opacity:0});
	});
});

// 4
$('.nav a').eq(0).trigger('click');

// 5
/*
$('.nav a').on('mouseenter', function(){
	var pos = $(this).position();
	console.log(pos);
	// $('.line').stop().animate({left : pos.left, top:pos.top});
	$('.line').stop().animate(pos);
});
*/

// 6
$('.nav a').on('mouseenter', function(){
	var pos = $(this).position();
	var lineWidth = $(this).outerWidth();
	pos.width = lineWidth;
	console.log(pos);
	$('.line').stop().animate(pos);
});



var index = 0;
setInterval(function () {
  $(".nav a").eq(index).trigger("mouseenter");
  $(".nav a").eq(index).trigger("click");
  if (index == 2) {
    index = -1;
  }
  index++;
}, 2000);