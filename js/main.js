/*===================================================================
Project Title: Personal Website

File Name: main.js

Author: Sherman Chow
Date: 2017/07/26

Last Modification: 2017/07/28
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
$(function() {
    // Initialize variable for visibility to false
    var menuVisible = false;
    // Click on menu button to show navigation links
    $("#menuBtn img").click(function() {
        if (menuVisible) {
            $("#myMenu").css({ "display": "none" });
            menuVisible = false;
            return;
        }
        // Otherwise, show navigation links
        $("#myMenu").css({ "display": "block" });
        menuVisible = true;
    });
    // Click again to hide navigation links
    $("#myMenu").click(function() {
        $(this).css({ "display": "none" });
        menuVisible = false;
    });
});