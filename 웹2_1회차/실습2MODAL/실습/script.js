$('.opener').on('click', function(){
	$('.window').addClass('open');
});

$('.yes, .no').on('click', function(){
	$('.window').removeClass('open');
});