// $('.button').click(function() {
// 	$('.wrapper').attr('class', 'wrapper red1');
// });

// $('.button2').click(function() {
// 	$('.wrapper').attr('class', 'wrapper blue');
// });


$('.dontpush1').click(function() {
	$('.wrapper').attr('class', 'wrapper red1');
});

$('.dontpush2').click(function() {
	$('.wrapper').attr('class', 'wrapper white1');
});

$('.dontpush3').click(function() {
	$('.wrapper').attr('class', 'wrapper red1');
});

$('.dontpush4').click(function() {
	$('.wrapper').attr('class', 'wrapper white1');
});

$('.dontpush5').click(function() {
	$('.wrapper').attr('class', 'wrapper red1');
});

$('.dontpush6').click(function() {
	$('.wrapper').attr('class', 'wrapper white1');
});

$('.dontpush7').click(function() {
	$('.wrapper').attr('class', 'wrapper red1');
});




$('.nav-item1').click(function() {
	var button_name = $(this).data('button');

	$('.wrapper').addClass(button_name)
	$('.dontpush1').addClass('hide')
	$('.c1').removeClass('hide')
	$('.transparent2').removeClass('hide')
	$('.transparent1').addClass('hide')

	$('.dontpush2').removeClass('hide')

});

$('.nav-item2').click(function() {
	var button_name = $(this).data('button');

	// $('.wrapper').removeClass(button_name)
	$('.dontpush2').addClass('hide')
	$('.c1').addClass('hide')
	$('.c2').removeClass('hide')
	$('.transparent2').addClass('hide')
	$('.transparent1').removeClass('hide')

	$('.dontpush3').removeClass('hide')

});

$('.nav-item3').click(function() {
	var button_name = $(this).data('button');

	$('.dontpush3').addClass('hide')
	$('.c2').addClass('hide')
	$('.c3').removeClass('hide')
	$('.transparent2').removeClass('hide')
	$('.transparent1').addClass('hide')

	$('.dontpush4').removeClass('hide')

});

$('.nav-item4').click(function() {
	var button_name = $(this).data('button');

	$('.dontpush4').addClass('hide')
	$('.c3').addClass('hide')
	$('.c4').removeClass('hide')
	$('.transparent1').removeClass('hide')
	$('.transparent2').addClass('hide')

	$('.dontpush5').removeClass('hide')

});

$('.nav-item5').click(function() {
	var button_name = $(this).data('button');

	$('.dontpush5').addClass('hide')
	$('.c4').addClass('hide')
	$('.c5').removeClass('hide')
	$('.transparent2').removeClass('hide')
	$('.transparent1').addClass('hide')

	$('.dontpush6').removeClass('hide')

});


$('.nav-item6').click(function() {
	var button_name = $(this).data('button');

	$('.dontpush6').addClass('hide')
	$('.c5').addClass('hide')
	$('.c6').removeClass('hide')
	$('.transparent1').removeClass('hide')
	$('.transparent2').addClass('hide')

	$('.dontpush7').removeClass('hide')

});


$('.nav-item7').click(function() {
	var button_name = $(this).data('button');

	$('.dontpush7').addClass('hide')
	$('.c6').addClass('hide')
	$('.c7').removeClass('hide')
	$('.transparent2').removeClass('hide')
	


});
