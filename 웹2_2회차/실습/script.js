$('.logo').on('click', function(){	
	$('.wrapper .about-section').addClass('bread');
});

$('.close').on('click', function(){
	$('.wrapper .about-section').removeClass('bread');
});