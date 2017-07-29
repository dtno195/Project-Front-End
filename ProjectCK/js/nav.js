$(document).ready(function() {
	var s=$('.mainmenu');
	var pos=s.position();
	var menu=$(this).parent('.lv1').find('.menulv1');
	$(window).scroll(function(){
		var windowPos=$(window).scrollTop();
		if(windowPos>=pos.top){
			s.addClass('stick');
			
		}
		else{
			s.removeClass('stick');
			
		}
	});
	$(".button-collapse").sideNav();
});