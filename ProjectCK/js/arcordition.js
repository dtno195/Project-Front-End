$(document).ready(function() {
	$('.accordion').each(function(){
		var text=$(this).parent('.accordionText').find('.textAccordition');
		$(this).on('click',function(){
			text.slideToggle();
		});
	});
});