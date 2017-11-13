// click nav-item
// if statement that checks which button was clicked
// remove hide class from corresponding button

// jQuery
// $();

// the reason that hide does not need . before is that the word removeClass already assume
// the thing after is a class

// = setting
// == checking

// append is img2 placed after img1 ect
// preppend is img2 placed before img1 ect 



$('.nav-item').click(function() {

	var img = $(this).data('img')
	var class_name = $(this).data('classname')
	// var img_to_show = '<img src="assets/img/' + target + '" />';
	var img_to_show = '<div class="' + class_name + ' logo"><img src="assets/img/' + img + '" /></div>';

	  		

$('.content').prepend(img_to_show);

});




// 	var target = $(this).data('horse')
// 	var img_to_show;

// 	if (target == 'apple'){
// 		img_to_show = '<img class="apple" src="assets/img/apple.png" />'; 	
// 	} else if (target == 'nike') {
// 		img_to_show = '<img class="nike" src="assets/img/nike.png" />';
// 	} else if (target == 'disney') {
// 		img_to_show = '<img class="disney" src="assets/img/disney.png" />';
// 	} else {
// 		img_to_show = '<img class="vogue" src="assets/img/vogue.png" />';
// 	}

// $('.content').append(img_to_show);

// });






// 	var target_horse = $(this).data('horse');
// 		// apple
// 	$(target_horse).removeClass('hide');


// });





// 	if ($(this).hasClass('apple-button')) {
// 	$('.apple').removeClass('hide');
// 	} else if ($(this).hasClass('nike-button')) {
// 	$('.nike').removeClass('hide');	
// 	} else if ($(this).hasClass('disney-button')) {
// 	$('.disney').removeClass('hide');	
// 	} else {
// 		$('.vogue').removeClass('hide');

// 	}
	
// });
