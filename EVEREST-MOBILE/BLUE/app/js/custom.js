$(document).ready(function() {

	$('.show-menu').click(function(){
		$('.aside').removeClass('not-active').addClass('active');
	});

	$('.aside-close').click(function(){
		$('.aside').removeClass('active').addClass('not-active');
	});
});