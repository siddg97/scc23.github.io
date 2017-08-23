/*===================================================================
Project Title: Personal Website

File Name: main.js

Author: Sherman Chow
Date: 2017/07/26

Last Modification: 2017/08/23
===================================================================*/

// Cover photo slideshow
(function() {
    function Slideshow(element) {
        this.el = document.querySelector(element);
        this.init();
    }
    Slideshow.prototype = {
        init: function() {
            this.wrapper = this.el.querySelector(".slider-wrapper");
            this.slides = this.el.querySelectorAll(".slide");
            this.previous = this.el.querySelector(".slider-previous");
            this.next = this.el.querySelector(".slider-next");
            this.index = 0;
            this.total = this.slides.length;
            this.timer = null;

            // Start the slideshow
            this.action();
            // Stop the slideshow
            // this.stopStart();
        },
        _slideTo: function(slide) {
            var currentSlide = this.slides[slide];
            // Fade in image; set opacity
            currentSlide.style.opacity = 1;

            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides[i];
                // Fade out image
                if (slide !== currentSlide) {
                    slide.style.opacity = 0;
                }
            }
        },
        action: function() {
            var self = this;
            self.timer = setInterval(function() {
                self.index++;
                if (self.index == self.slides.length) {
                    self.index = 0;
                }
                self._slideTo(self.index);

            }, 5000);
        },
        // Stop the slideshow when mouse is over photo
        // stopStart: function() {
        //     var self = this;
        //     self.el.addEventListener("mouseover", function() {
        //         clearInterval(self.timer);
        //         self.timer = null;

        //     }, false);
        //     self.el.addEventListener("mouseout", function() {
        //         self.action();

        //     }, false);
        // }
    };
    document.addEventListener("DOMContentLoaded", function() {
        var slider = new Slideshow("#main-slider");
    });
})();

// Fade in cover text when loading page
$(".name").hide();
$(".name").fadeIn(1000);

// Cover Text fade in/fade out every few seconds
setInterval(function() {
    $(".switchText").fadeOut(550, function() {
        var $this = $(this);
        $this.text($this.text() == "Software Engineer" ? "Computer Science Student" : "Software Engineer");
        $this.fadeIn(420);
    });
}, 5000);

// Automatic smooth scrolling when pressing navigation links
$(document).on("click", ".navbar a", function(event) {
    event.preventDefault();

    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
    }, 500);
});

// Automatic scroll to top smoothly when clicked arrow at bottom of page or Home on navbar
if ($("#backToTop").length) {
    var scrollTrigger = 100, // px
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $("#backToTop").addClass("show");
            } else {
                $("#backToTop").removeClass("show");
            }
        };
    backToTop();
    $(window).on("scroll", function() {
        backToTop();
    });
    $("#backToTop").on("click", function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 700);
    });
}

// Hide/show navigation menu
// $(function() {
//     // Initialize variable for visibility to false
//     var menuVisible = false;
//     // Click on menu button to show navigation links
//     $("#menuBtn img").click(function() {
//         if (menuVisible) {
//             $("#myMenu").css({ "display": "none" });
//             menuVisible = false;
//             return;
//         }
//         // Otherwise, show navigation links
//         $("#myMenu").css({ "display": "block" });
//         menuVisible = true;
//     });
//     // Click again to hide navigation links
//     $("#myMenu").click(function() {
//         $(this).css({ "display": "none" });
//         menuVisible = false;
//     });
// });

// Hide/show navigation menu (slide up/down)
$(function() {
    var menuVisible = false;

    // When user clicks on menu
    $("#menuBtn img").click(function() {
        // Slide down when menu is not visible
        if (!menuVisible) {
            $("#myMenu").slideDown();
            menuVisible = true;
        }
        // Slide up when menu is visible
        else {
            $("#myMenu").slideUp();
            menuVisible = false;
        }
    });

    // Slide up when user clicks a link and anywhere else on screen
    $("body").click(function() {
        $("#myMenu").slideUp();
        menuVisible = false;
    });
    // Prevents the menu from sliding down and up right away when clicked once
    $('#menuBtn').click(function(event) {
        event.stopPropagation();
    });
});




/*===============================*/
/* Last modification: 08/22/2017 */
/*    OLD JS FOR OLD MODALS     */
/*===============================*/

// // Get the modal
// var modal1 = document.getElementById('myModal1');
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img1 = document.getElementById('myImg1');
// var modalImg1 = document.getElementById("img1");
// var captionText1 = document.getElementById("caption1");
// img1.onclick = function() {
//     modal1.style.display = "block";
//     modalImg1.src = this.src;
//     captionText1.innerHTML = this.alt;
// };

// var modal2 = document.getElementById('myModal2');
// var img2 = document.getElementById('myImg2');
// var modalImg2 = document.getElementById("img2");
// var captionText2 = document.getElementById("caption2");
// img2.onclick = function() {
//     modal2.style.display = "block";
//     modalImg2.src = this.src;
//     captionText2.innerHTML = this.alt;
// };

// var modal3 = document.getElementById('myModal3');
// var img3 = document.getElementById('myImg3');
// var modalImg3 = document.getElementById("img3");
// var captionText3 = document.getElementById("caption3");
// img3.onclick = function() {
//     modal3.style.display = "block";
//     modalImg3.src = this.src;
//     captionText3.innerHTML = this.alt;
// };

// var modal4 = document.getElementById('myModal4');
// var img4 = document.getElementById('myImg4');
// var modalImg4 = document.getElementById("img4");
// var captionText4 = document.getElementById("caption4");
// img4.onclick = function() {
//     modal4.style.display = "block";
//     modalImg4.src = this.src;
//     captionText4.innerHTML = this.alt;
// };

// var modal5 = document.getElementById('myModal5');
// var img5 = document.getElementById('myImg5');
// var modalImg5 = document.getElementById("img5");
// var captionText5 = document.getElementById("caption5");
// img5.onclick = function() {
//     modal5.style.display = "block";
//     modalImg5.src = this.src;
//     captionText5.innerHTML = this.alt;
// };

// var modal6 = document.getElementById('myModal6');
// var img6 = document.getElementById('myImg6');
// var modalImg6 = document.getElementById("img6");
// var captionText6 = document.getElementById("caption6");
// img6.onclick = function() {
//     modal6.style.display = "block";
//     modalImg6.src = this.src;
//     captionText6.innerHTML = this.alt;
// };

// var modal7 = document.getElementById('myModal7');
// var img7 = document.getElementById('myImg7');
// var modalImg7 = document.getElementById("img7");
// var captionText7 = document.getElementById("caption7");
// img7.onclick = function() {
//     modal7.style.display = "block";
//     modalImg7.src = this.src;
//     captionText7.innerHTML = this.alt;
// };

// var modal8 = document.getElementById('myModal8');
// var img8 = document.getElementById('myImg8');
// var modalImg8 = document.getElementById("img8");
// var captionText8 = document.getElementById("caption8");
// img8.onclick = function() {
//     modal8.style.display = "block";
//     modalImg8.src = this.src;
//     captionText8.innerHTML = this.alt;
// };

// var modal9 = document.getElementById('myModal9');
// var img9 = document.getElementById('myImg9');
// var modalImg9 = document.getElementById("img9");
// var captionText9 = document.getElementById("caption9");
// img9.onclick = function() {
//     modal9.style.display = "block";
//     modalImg9.src = this.src;
//     captionText9.innerHTML = this.alt;
// };


function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }