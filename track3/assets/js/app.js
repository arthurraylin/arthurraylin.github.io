$('.confusion').click(function() {
	$('.wrapper2').removeClass('hide')
	$('.monitoring').removeClass('hide')
});

$('.monitoring').click(function() {
	$('.wrapper3').removeClass('hide')
	$('.deception').removeClass('hide')
});

$('.deception').click(function() {
	$('.wrapper4').removeClass('hide')
	$('.captivity').removeClass('hide')
});

$('.captivity').click(function() {
	$('.wrapper5').removeClass('hide')
	$('.pressure').removeClass('hide')
});

$('.pressure').click(function() {
	$('.glitch1').removeClass('hide')
	$('.glitch2').removeClass('hide')
	$('.glitch3').removeClass('hide')
	$('.glitch4').removeClass('hide')
	$('.glitch5').removeClass('hide')

	$('.wrapper1').addClass('opacity')
	$('.wrapper2').addClass('opacity')
	$('.wrapper3').addClass('opacity')
	$('.wrapper4').addClass('opacity')
	$('.wrapper5').addClass('opacity')
});









$(".glitch1").mgGlitch({
	destory: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: 'hue',
	glitch1TimeMin: 305,
	glitch1TimeMax: 505,
	glitch2TimeMin: 115,
	glitch2TimeMax: 205,
});

$(".glitch2").mgGlitch({
	destory: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: 'hue',
	glitch1TimeMin: 220,
	glitch1TimeMax: 420,
	glitch2TimeMin: 30,
	glitch2TimeMax: 120,
});

$(".glitch3").mgGlitch({
	destory: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: 'hue',
	glitch1TimeMin: 170,
	glitch1TimeMax: 370,
	glitch2TimeMin: 0,
	glitch2TimeMax: 70,
});

$(".glitch4").mgGlitch({
	destory: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: 'hue',
	glitch1TimeMin: 250,
	glitch1TimeMax: 450,
	glitch2TimeMin: 60,
	glitch2TimeMax: 150,
});

$(".glitch5").mgGlitch({
	destory: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: 'hue',
	glitch1TimeMin: 200,
	glitch1TimeMax: 400,
	glitch2TimeMin: 10,
	glitch2TimeMax: 100,
});

// $(".whole1").mgGlitch({
// 	destory: false,
// 	glitch: true,
// 	scale: true,
// 	blend: true,
// 	blendModeType: 'hue',
// 	glitch1TimeMin: 300,
// 	glitch1TimeMax: 500,
// 	glitch2TimeMin: 20,
// 	glitch2TimeMax: 200,
// });

// $(".whole2").mgGlitch({
// 	destory: false,
// 	glitch: true,
// 	scale: true,
// 	blend: true,
// 	blendModeType: 'hue',
// 	glitch1TimeMin: 200,
// 	glitch1TimeMax: 400,
// 	glitch2TimeMin: 10,
// 	glitch2TimeMax: 100,
// });

// $(".whole3").mgGlitch({
// 	destory: false,
// 	glitch: true,
// 	scale: true,
// 	blend: true,
// 	blendModeType: 'hue',
// 	glitch1TimeMin: 200,
// 	glitch1TimeMax: 400,
// 	glitch2TimeMin: 10,
// 	glitch2TimeMax: 100,
// });

// $(".whole4").mgGlitch({
// 	destory: false,
// 	glitch: true,
// 	scale: true,
// 	blend: true,
// 	blendModeType: 'hue',
// 	glitch1TimeMin: 200,
// 	glitch1TimeMax: 400,
// 	glitch2TimeMin: 10,
// 	glitch2TimeMax: 100,
// });

// $(".whole5").mgGlitch({
// 	destory: false,
// 	glitch: true,
// 	scale: true,
// 	blend: true,
// 	blendModeType: 'hue',
// 	glitch1TimeMin: 200,
// 	glitch1TimeMax: 400,
// 	glitch2TimeMin: 10,
// 	glitch2TimeMax: 100,
// });