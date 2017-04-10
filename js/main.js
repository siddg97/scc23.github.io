// alert("SUP FAM");
// document.body.style.backgroundColor = "orange";

$(document).ready(function() {

	// show/hide navigation menu
	$('#navigation').hide();

	$('#menu-button').click(function() {
		$('#navigation').fadeToggle();
	});


	// enlarge gallery images
	$('#gallery img').click(function() {
		var img = $(this).attr("src");
		var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";
		appear_image = appear_image.concat("<img id='appear_image' src='"+img+"' />");
		$('body').append(appear_image);
	});
	function closeImage() {
		$('#appear_image_div').remove();
		$('#appear_image').remove();
	}

	// automatic smooth scrolling when pressing navigation links
	$(document).on('click', 'a', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});

	// automatic scroll to top smoothly when clicked arrow at bottom of page
	if ($('#back-to-top').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#back-to-top').addClass('show');
	            } else {
	                $('#back-to-top').removeClass('show');
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}

});