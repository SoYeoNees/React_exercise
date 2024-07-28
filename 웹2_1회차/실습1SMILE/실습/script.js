$('.face-menu img').on('click',function(){	
	var thisClass = $(this).attr('class');
	$('.face').removeClass().addClass('face ' + thisClass);
});
