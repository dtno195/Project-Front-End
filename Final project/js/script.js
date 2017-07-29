$(document).ready(function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.img-slide');
	$(".button-collapse").sideNav();
	$('.slider').slider();
	$('.scrollspy').scrollSpy();
	$('.materialboxed').materialbox();
	$('.nav-wrapper a[href*="#"]:not([href="#"])').click(function() {
	  	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		    var target = $(this.hash);
		    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		    if (target.length) {
		      $('html, body').animate({
		        scrollTop: target.offset().top
		      }, 1000);
		      return false;
		    }
	  }
	});
	$(".under-contents").hide();
	$(".img-front").on("click",function(){
		$(".under-contents",this).fadeToggle("slow");
	})
	$(":button").on("click",function(){
		var name = $(":input[name='fname']");
		var mail = $(":input[name='fmail']");
		var message = $(":input[name='fmessage']");
		var re = /^\w+@(\w+)\.(\w+)$/;
		if (name.val() == "") {
			$(".errorName").html("This field is require");
		}
		else if (name.val().length < 8){
			$(".errorName").html("This field require more than 8 character");
		}
		else {
			$(".errorName").html("");
		}
		if (mail.val() == "") {
			$(".errorMail").html("This field is require");
		}
		else if (!mail.val().match(re)) {
			$(".errorMail").html("Check your mail again");
		}
		else{
			$(".errorMail").html("");
		}
		if (message.val() == "") {
			$(".errorMessage").html("This field is require");
		}
		else{
			$(".errorMessage").html("");
		}

	})
})

