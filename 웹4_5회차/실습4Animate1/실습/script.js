/*
	1. title을 클릭하였을때, music-list가 나오게 만들어보세요.

	2. music-list의 음악리스트를 클릭하면
	Now Playing이라는 글자가 그 음악으로 바뀌고
	music-list가 닫히도록 해보세요.

	3. cd에 애니메이션을 걸어보세요.

	4. css를 확인하여 cd의 클래스를 바꿔보세요.

	[ 디자이너는 여기까지! ]

	5. this를 활용하여 코드함축을 해보세요.
*/


// 1

$('.title').on('click', function () {
	$('.music-list').slideDown();
})

// // 2,3
// $('.music-list li').eq(0).click(function () {
// 	$('.title').text($('.music-list li').eq(0).text());
// 	$('.music-list').slideUp();
// 	/*
// 	$('#cd').animate({
// 		'left': '-330px'
// 	}, function () {
// 		$('#cd').animate({ 'left': '-60px' })
// 	})
// 	*/
// 	// jquery 'string', 'number' 둘다 가능
// 	$('#cd').animate({ 'width': '0' }, function () {
// 		$('#cd').removeClass('music02').removeClass('music03')
// 		$('#cd').addClass('music01')
// 		$('#cd').animate({ 'width': '300' })
// 	})
// });
// $('.music-list li').eq(1).click(function () {
// 	$('.title').text($('.music-list li').eq(1).text());
// 	$('.music-list').slideUp();
// 	$('#cd').animate({ 'width': '0' }, function () {
// 		$('#cd').removeClass('music01').removeClass('music03')
// 		$('#cd').addClass('music02')
// 		$('#cd').animate({ 'width': '300' })
// 	})
// });
// $('.music-list li').eq(2).click(function () {
// 	$('.title').text($('.music-list li').eq(2).text());
// 	$('.music-list').slideUp();
// 	$('#cd').animate({ 'width': '0' }, function () {
// 		$('#cd').removeClass('music02').removeClass('music01')
// 		$('#cd').addClass('music03')
// 		$('#cd').animate({ 'width': '300' })
// 	})
// });


// 5-1
// $('.music-list li').on('click', function () {
// 	$('.title').text($(this).eq(0).text());
// 	$('.music-list').slideUp();

// 	var nowClass = $(this).attr('class');
// 	console.log('1', this);
// 	$('#cd').animate({ 'width': '0' }, function () {
// 		/*
// 			animate 메서드 내에서의 this는
// 			애니메이터 대상을 가리킴
// 		*/
// 		console.log('2', this);
// 		$('#cd').removeClass($('#cd').attr('class'));
// 		$('#cd').addClass(nowClass)
// 		$('#cd').animate({ 'width': '300' })
// 	});
// })

//5-2
$('.music-list li').on('click', function () {
	$('.title').text($(this).eq(0).text());
	$('.music-list').slideUp();

	var nowClass = $(this).attr('class');
	console.log('1', this);
	$('#cd').animate({ 'width': '0' }, function () {
		/*
			animate 메서드 내에서의 this는
			애니메이터 대상을 가리킴
		*/
		console.log('2', this);
		$('#cd').attr('class', nowClass)
		$('#cd').animate({ 'width': '300' })
	});
});