var main = function(){
	$('.navbar-ext').hide();
	$('.active-nav').click(function(){
		$('.navbar-ext').fadeToggle();
	});
};

$(document).ready(main);