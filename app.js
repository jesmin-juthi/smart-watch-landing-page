$(document).ready(function(){


	$('nav ul li a').click(function(){

		$('nav ul li a').removeClass('active');
		$(this).addClass('active');

	});


	$('#left').click(function(){
		$('.img-container').find('.active').prev().addClass('active');
		$('.img-container').find('.active').next().removeClass('active');
	});

	$('#right').click(function(){
		$('.img-container').find('.active').next().addClass('active');
		$('.img-container').find('.active').prev().removeClass('active');
	});


});