/*

	[ 마우스 이벤트 ]
	1. 마우스를 올리면 볼터치가 생기게 해보세요.

	2. 마우스를 내리면 볼터치가 사라지게 해보세요.

	3. 아래와 같이 코드를 하나로 합칠 수 있습니다. 코드를 합쳐보세요.
	$('.face').on('mouseenter mouseleave', function(e){
		console.log(e)
	});

	4. mousemove를 이용하여 마우스 움직일때마다 이미지가 따라오게 만드세요.

	5. 다른 이벤트를 확인하기 위해 지금까지의 모든 on메서드를 off 메서드로 바꿔주세요.
	
	[ 키보드 이벤트 ]
	6. 'keydown'을 활용하여 방향키 방향으로 움직이게 해보세요.

	[ 스크롤 이벤트 ]
	7. 'scroll'을 이용하여 이미지가 스크롤시 따라오게 만들어보세요.

	[ 반응형 ]
	8. resize을 이용하여 브라우저의 width값이 700미만 또는 height값이 700미만이면 볼터치가 생기게 해보세요
	
*/

/*
// 1
$('.face').on('mouseenter', function(){
	$(this).children('img').animate({opacity:1},300);
});

// 2
$('.face').on('mouseleave', function(){
	$(this).children('img').animate({opacity:0},300);
});
*/

// 3
$('.face').off('mouseenter mouseleave', function(e){
	// console.log(e);

	var chk = e.type;
	console.log(chk);

	if(chk === 'mouseenter'){
		$(this).children('img').animate({opacity:1},300);
	} else {
		$(this).children('img').animate({opacity:0},300);
	}
});

// 4
/*
	[ clientX, clientY ]
	사용자에게 보여지는 브라우저 페이지를 기준으로 좌표 표시(스크롤바와 상관X)

	[ offsetX, offsetY ]
	요소 영역을 기준으로 좌표 표시

	[ pageX, pageY ]
	스크롤을 포함한 페이지를 기준으로 좌표 표시

	[ screenX, screenY ]
	모니터(스크린)을 기준으로 좌표 표시
*/
$(window).off('mousemove', function(e){
	// console.log(e);
	console.log(e.pageX);
	console.log(e.pageY);

	var pos = {
		left : e.pageX,
		top : e.pageY
	};
	$('.face').css(pos);
});

// 6
$(window).off('keydown', onKeyDown);

function onKeyDown(e){
	// console.log(e);
	var chk = e.keyCode;

	if(chk === 37) {
		$('.face').stop().animate({'left' : '-=5%'});
	}
	if(chk === 39) {
		$('.face').stop().animate({'left' : '+=5%'});
	}
	if(chk === 38) {
		$('.face').stop().animate({'top' : '-=5%'});
	}
	if(chk === 40) {
		$('.face').stop().animate({'top' : '+=5%'});
	}
}

// 7
$(window).off('scroll', onScroll);

function onScroll(){
	var scroll = $(window).scrollTop();
	var s = $(window).height() / 2;
	$('.face').stop().animate({top : scroll + s});

	if(scroll >= 500){
		$('.face img').animate({opacity : 1}, 300);
	} else {
		$('.face img').animate({opacity : 0}, 300);
	}
}

$(window).on('resize', onResize);

function onResize(){
	var w = $(window).width();
	var h = $(window).height();

	if(w < 700 || h < 700){
		$('.face img').animate({opacity : 1}, 300);
	}
	
}