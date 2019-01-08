$(document).ready(function() {
	$('.live-play').click(function(){
		$(this).next().slideToggle();
	});
	$('.play-subcategory').click(function(){
		$(this).next().slideToggle();
	});

	$('.show-menu').click(function(){
		$(this).next('.menu-dropdown').slideToggle();
	});

	$('.top-menu-link').click(function(){
		$(this).next('.top-menu-dropdown').slideToggle();
	});

	$('.search-main-inform').click(function(){
		$('.search-main-dropdown').slideToggle();
	});


	$('.tab-header .tab-link').click(function(){
		$('.tab-header .tab-link').removeClass('active');
		$(this).addClass('active');
		var attr = $(this).attr('data');
		$('.tab-body').removeClass('active').addClass('not-active');
		$(attr).removeClass('not-active').addClass('active');
	});

	$('.reports-dropdown').click(function(){
		$(this).parent().parent().next('.toggle-table').slideToggle();
	});


/*	$('.service-header .tab-header .tab-link').click(function(){
		$('.service-header .tab-header .tab-link').removeClass('active');
		$(this).addClass('active');
		var attr = $(this).attr('data');
		$('.service-tab-body').removeClass('active').addClass('not-active');
		$(attr).removeClass('not-active').addClass('active');
	});


	$('.setting-header .tab-header .tab-link').click(function(){
		$('.setting-header .tab-header .tab-link').removeClass('active');
		$(this).addClass('active');
		var attr = $(this).attr('data');
		$('.setting-tab-body').removeClass('active').addClass('not-active');
		$(attr).removeClass('not-active').addClass('active');
	});
*/


	$('.events-field').click(function(){
		$('.events-dropdown').slideToggle();
	});

});