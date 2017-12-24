// Welcome screen effect
$(function() {
    var welcomeSection = $('.welcome-section'),
        enterButton = welcomeSection.find('.enter-button');
    setTimeout(function() {
        welcomeSection.removeClass('content-hidden');
    }, 500);
});

// Fade out welcome screen
$(document).ready(function() {
    // $('#hideMe').fadeOut(3000);
    setTimeout(function() {
        $('#hideMe').fadeOut(700)
    }, 3200);
});

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
    };
    document.addEventListener("DOMContentLoaded", function() {
        var slider = new Slideshow("#main-slider");
    });
})();

// Automatic smooth scrolling when pressing navigation links
$(document).on("click", ".navbar a", function(event) {
    event.preventDefault();

    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
    }, 500);
});

// Automatic scroll to top smoothly when clicked arrow at bottom of page or Home on navbar
$(function(){$("#backToTop").click(function(){$("html,body").animate({scrollTop:$("#start").offset().top},"1500");return false})})

// Scroll reveal
$(document).ready(function() {
    $('body').hide();
    $('body').fadeIn(700);
    window.sr = ScrollReveal({ duration: 1000 });
    sr.reveal('#about');
    sr.reveal('#experience_education');
    sr.reveal('#projects');
    sr.reveal('#end');
});


