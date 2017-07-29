 $(document).ready(function(){
 	
 	setInterval(function(){
		$('.carousel.carousel-slider').carousel({fullWidth: true});
 	},2000);
  	setInterval(function(){
  		if($('#bg1').hasClass('active')==true){
	 		$('.man').hide();
	 		$('.flower').hide();
	 		$('.vegertable').hide();
	 		$('.xeng').hide();
	 		$('.woman').show();
	 		$('.rau').show();
	 		$('.bacha').show();
	 		$('.hoasen').show();

	 	}
	 	else{
	 		$('.man').show();
	 		$('.flower').show();
	 		$('.vegertable').show();
	 		$('.xeng').show();
	 		$('.woman').hide();
	 		$('.rau').hide();
	 		$('.bacha').hide();
	 		$('.hoasen').hide();	
	 	}

  	},30);
 });

