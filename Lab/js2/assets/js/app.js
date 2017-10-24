


$('.nav-item').click(function() {
// this turn nav-item into a clicking fuctional button

	var button_name = $(this).data('button');
	// this refers to whichever items that are being click(with data-button classification)
	// clicking motion is added to whichever has data-button classification, and they 
	// are named to be button_name in JavaScript.
	// the button in the bracket is just a name for data-button; click function is specified 
	// in var

	// here in JS is button_name, then this name is = button [data-button] to html


	$('.content').attr('class', 'column content')
	// old content change into new content 
	// resetting the old added class content with fresh, so it won't keep adding on

	$('.content').addClass(button_name);
	// this refers to button_name being added to the content.
	// 


	$('.nav-item').removeClass('active');
	// the active component (light grey background) is being removed away from nav-item
	// this is for the nav-item hover return to white filled instead of staying black after clicked
	$('.about-text').addClass('hide');
	// the hide function is added to about-text
	// it functions to hide the content in the colors block, cux only About should have text 
	$(this).addClass('active');
	// active function is added to the thig being click
	// it turns the nav-item into black filled when clicked (as activated)
	


	// it is like putting or taking class away from the original set div of classification
	//blue action don' need . before 'word'
	// it is a repeating cycle, and the attr line is the resetting button





	if (button_name == 'beyonce') {
		$('.lightbox').removeClass('hide');
		$('audio')[0].play();
	} else if (button_name == 'about')
	 $('.about-text').removeClass('hide');
	 // the text content shows up if click, since hide is removed.
	 // ,and the text conent would stay appearing

});




$('.close-button').click(function() {
	$('audio')[0].pause();
	$('.lightbox').addClass('hide')
	$('.nav-item').removeClass('active');
});
// this is about the lightbox from beyonce slay 
// what is this active do?
