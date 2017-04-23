$(document).ready(function() {

	$('body').hide();
	$('body').fadeIn(1000);

	(function($) {
	  /**
	   * Copyright 2012, Digital Fusion
	   * Licensed under the MIT license.
	   * http://teamdf.com/jquery-plugins/license/
	   *
	   * @author Sam Sehnert
	   * @desc A small plugin that checks whether elements are within
	   *     the user visible viewport of a web browser.
	   *     only accounts for vertical position, not horizontal.
	   */
	  $.fn.visible = function(partial) {
	      var $t            = $(this),
	          $w            = $(window),
	          viewTop       = $w.scrollTop(),
	          viewBottom    = viewTop + $w.height(),
	          _top          = $t.offset().top,
	          _bottom       = _top + $t.height(),
	          compareTop    = partial === true ? _bottom : _top,
	          compareBottom = partial === true ? _top : _bottom;
	    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	  };
	})(jQuery);

	var win = $(window);
	var allMods = $("#about h1, #about p, #about h2, #about ul, .column, #about center, #about h3, #gallery h1, #gallery p, #myImg1, #myImg2, #myImg3, #myImg4, #myImg5, #myImg6, #myImg7, #myImg8, #myImg9, #myImg10, #myImg11, #myImg12, #contact h1, #contact p");

	allMods.each(function(i, el) {
	  var el = $(el);
	  if (el.visible(true)) {
	    el.addClass("already-visible"); 
	  } 
	});


	win.scroll(function(event) {
	  allMods.each(function(i, el) {
	    var el = $(el);
	    if (el.visible(true)) {
	      el.addClass("come-in"); 
	    } 
	  });
	});










	// Get the modal
	var modal1 = document.getElementById('myModal1');
	// Get the image and insert it inside the modal
	var img1 = document.getElementById('myImg1');
	var modalImg1 = document.getElementById("img1");
	img1.onclick = function(){
	    modal1.style.display = "block";
	    modalImg1.src = this.src;
	}

	var modal2 = document.getElementById('myModal2');
	var img2 = document.getElementById('myImg2');
	var modalImg2 = document.getElementById("img2");
	img2.onclick = function(){
	    modal2.style.display = "block";
	    modalImg2.src = this.src;
	}

	var modal3 = document.getElementById('myModal3');
	var img3 = document.getElementById('myImg3');
	var modalImg3 = document.getElementById("img3");
	img3.onclick = function(){
	    modal3.style.display = "block";
	    modalImg3.src = this.src;
	}

	var modal4 = document.getElementById('myModal4');
	var img4 = document.getElementById('myImg4');
	var modalImg4 = document.getElementById("img4");
	img4.onclick = function(){
	    modal4.style.display = "block";
	    modalImg4.src = this.src;
	}

	var modal5 = document.getElementById('myModal5');
	var img5 = document.getElementById('myImg5');
	var modalImg5 = document.getElementById("img5");
	img5.onclick = function(){
	    modal5.style.display = "block";
	    modalImg5.src = this.src;
	}

	var modal6 = document.getElementById('myModal6');
	var img6 = document.getElementById('myImg6');
	var modalImg6 = document.getElementById("img6");
	img6.onclick = function(){
	    modal6.style.display = "block";
	    modalImg6.src = this.src;
	}

	var modal7 = document.getElementById('myModal7');
	var img7 = document.getElementById('myImg7');
	var modalImg7 = document.getElementById("img7");
	img7.onclick = function(){
	    modal7.style.display = "block";
	    modalImg7.src = this.src;
	}

	var modal8 = document.getElementById('myModal8');
	var img8 = document.getElementById('myImg8');
	var modalImg8 = document.getElementById("img8");
	img8.onclick = function(){
	    modal8.style.display = "block";
	    modalImg8.src = this.src;
	}

	var modal9 = document.getElementById('myModal9');
	var img9 = document.getElementById('myImg9');
	var modalImg9 = document.getElementById("img9");
	img9.onclick = function(){
	    modal9.style.display = "block";
	    modalImg9.src = this.src;
	}

	var modal10 = document.getElementById('myModal10');
	var img10 = document.getElementById('myImg10');
	var modalImg10 = document.getElementById("img10");
	img10.onclick = function(){
	    modal10.style.display = "block";
	    modalImg10.src = this.src;
	}

	var modal11 = document.getElementById('myModal11');
	var img11 = document.getElementById('myImg11');
	var modalImg11 = document.getElementById("img11");
	img11.onclick = function(){
	    modal11.style.display = "block";
	    modalImg11.src = this.src;
	}

	var modal12 = document.getElementById('myModal12');
	var img12 = document.getElementById('myImg12');
	var modalImg12 = document.getElementById("img12");
	img12.onclick = function(){
	    modal12.style.display = "block";
	    modalImg12.src = this.src;
	}












	// automatic smooth scrolling when pressing navigation links
	$(document).on('click', '#nav a', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});	

	// automatic scroll to top smoothly when clicked arrow at bottom of page
	if ($('#backToTop').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#backToTop').addClass('show');
	            } else {
	                $('#backToTop').removeClass('show');
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#backToTop').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}

});