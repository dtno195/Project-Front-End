$(document).ready(function(){
        $('#contact').on('click',function (e) { 
        	e.preventDefault();
            $('.mainPr').load('contact.html'); 
        }); 
});