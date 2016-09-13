(function ($) {
	$.fn.carousel = function() {
		var dot1 = $( '#dot1' );
		var dot2 = $( '#dot2' );
		var dot3 = $( '#dot3' );
		var elementsList = $('.carousel-list');

	 
	    var pixelsOffset = 125;
	    var currentLeftValue = 0;
	    var elementsCount = elementsList.find('li').length;
	    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
	    var maximumOffset = 0;
	 
	    dot1.click(function() { 
	     
	         $('.carousel-element1').show();
	        $('.carousel-element2').hide();
	         $('.carousel-element3').hide();
	    });
	    dot2.click(function() {        
	         
	         $('.carousel-element1').hide();
	        $('.carousel-element2').show();
	         $('.carousel-element3').hide();
	    });
	    dot3.click(function() {        
	       
	         $('.carousel-element1').hide();
	        $('.carousel-element2').hide();
	         $('.carousel-element3').show();
	    });
	 
	    
	}
})(jQuery);

$(function() {
	$("").carousel();
});

$(function(){
	var menu_ul = $('.submenu');
	var menu_a = $('.panel__link');
	menu_ul.hide();
	menu_a.click(function(e) {
        e.preventDefault();
            $('i').removeClass('fa-minus');
        if(!$(this).hasClass('active')) {
        	$('i').addClass('fa-minus');
            menu_a.removeClass('active');
            menu_ul.filter(':visible').slideUp('normal');
            $(this).addClass('active').next().stop(true,true).slideDown('normal');

        } else {
            $(this).removeClass('active');
            $(this).next().stop(true,true).slideUp('normal');
        }


    });
    
    $('#servise_img1').hover( function (){
    	$('#servise_img1 img').attr("src", "img/service5.png");
    	},
    	function(){
    		$('#servise_img1 img').attr("src", "img/service1.png");
    });
    $('#servise_img2').hover( function (){
    	$('#servise_img2 img').attr("src", "img/service5.png");
    	},
    	function(){
    		$('#servise_img2 img').attr("src", "img/service2.png");
    });
    $('#servise_img3').hover( function (){
    	$('#servise_img3 img').attr("src", "img/service5.png");
    	},
    	function(){
    		$('#servise_img3 img').attr("src", "img/service3.png");
    });
    $('#servise_img4').hover( function (){
    	$('#servise_img4 img').attr("src", "img/service5.png");
    	},
    	function(){
    		$('#servise_img4 img').attr("src", "img/service4.png");
    });
    
});