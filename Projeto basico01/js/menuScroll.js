$(function(){
	$('nav li a').click(function(){

		//$('nav a').css('color', 'white');
		//$(this).css('color', 'darkgray');

		var href = $(this).attr('href');
		var offsetTop = $(href).offset().top;
	
		$('html,body').animate({'scrollTop': offsetTop});
		return false;
	})

	
})