$(document).ready(function() {
	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
	var phoneno = /^0\d{9,10}$/;
	$('.gui').on('click',function(){
		var phonecheck=$('.validate').eq(1).val();
		if(phoneno.test(phonecheck)==true){
			$('.validate').eq(1).addClass('valid');
		}
		else{
			$('.validate').eq(1).addClass('invalid');
		}
		if($('.validate').val()==""){
			$('.validate').addClass('invalid');
		}
	})
});