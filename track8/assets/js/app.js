$('.nav-item').click(function() {
	var button_name = $(this).data('button');

	$('.wrapper').attr('class', 'wrapper');
	$('.wrapper').addClass(button_name); 

});