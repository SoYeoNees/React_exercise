/*
	1. 페이지 방문시에 .gallery li 이미지 각각의 요소가 나타나게 만드세요.
	단! 순차적으로 나타나야 합니다.

	2. li.type-a에 마우스 올리면
	border값을 2로 변경하고 이미지의 opacity를 1로 만들어보세요.

	3. li.type-a에 마우스 떼면
	원래 상태로 만들어보세요.

	4. li.type-b에 마우스 올리면 이미지의 top값과 opacity값을 변경하고,
	li.type-b에 마우스 떼면 이미지를 원래 상태로 만들어보세요.

	5. li.type-c에 마우스 올리면 이미지가 올라오고 떼면 원래 사태로 만들어보세요.
	단! li.type-c안의 이미지는 각각 높이가 다릅니다. 이 점을 유의하여 작성해보세요.


*/

// 1
/* 첫번째 방법
for (var i = 0; i < $('.gallery li').length; i++) {
	$('.gallery li').eq(i).delay(i * 100).fadeIn();
}
*/
/* 두번째 방법 */
$('.gallery li').each(function (index) {
	$(this).delay(index * 100).fadeIn();
});


/*
	[ mouseover, mouseout ]
	선택자로 지정한 요소와 그 요소의 자식 요소에서의 마우스 움직임을 모두 감지

	[ mouseenter, mouseleave ]
	선택자로 지정한 요소에서만 마우스 움직임을 감지
*/

// 2
$('li.type-a').on('mouseenter', function () {
	$(this).stop().animate({ borderWidth: 2 }, 100)
	$(this).children('img').stop().animate({ opacity: 1 });
});

// 3
$('li.type-a').on('mouseleave', function () {
	$(this).stop().animate({ borderWidth: 5 }, 100)
	$(this).children('img').stop().animate({ opacity: 0.5 });
});

// 4
$('li.type-b').on('mouseenter', function () {
	$(this).children('img').stop().animate({ top: 0, opacity: 1 });
})

$('li.type-b').on('mouseleave', function () {
	$(this).children('img').stop().animate({ top: -40, opacity: 0.5 });
})

// 5
$('li.type-c').on('mouseenter', function () {
	var h = $(this).find('img').height();
	$(this).children('.inner').stop().animate({ height: h });
	$(this).css('background-color', '#fff')
	$(this).stop().animate({ letterSpacing: 20, textIndent: 20 })
})

$('li.type-c').on('mouseleave', function () {
	$(this).children('.inner').stop().animate({ height: 0 });
	$(this).css('background-color', '#999')
	$(this).stop().animate({ letterSpacing: 0, textIndent: 0 })
})