$(function(){
	$('nav.menu-mobile i').click(function(){
		var menu = $(this).parent().find('ul');
		menu.slideToggle();
	})
})