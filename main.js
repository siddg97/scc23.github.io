// Global scope
var setCounter;

$(document).ready(function() {

      // Responsive navigation
      var t1 = new TimelineMax({paused: true});

      // Transform toggle button by rotating menu button to an X button
      t1.to(".one", 0.8, {
           y: 6,
           rotation: 45,
           ease: Expo.easeInOut
      });
      t1.to(".two", 0.8, {
           y: -6,
           rotation: -45,
           ease: Expo.easeInOut,
           delay: -0.8
      });

      // Show navigation menu
      t1.to(".menu", 1, {
           top: "0%",
           ease: Expo.easeInOut,
           delay: -1
      });

      // Show navigation links
      t1.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.2);

      // Slide out navigation menu when the user clicks the toggle button or a link
      t1.reverse();
      $(document).on("click touchstart", ".toggle-btn", function() {
           t1.reversed(!t1.reversed());
      });
      $(document).on("click touchstart", ".data a", function() {
            t1.reversed(!t1.reversed());
      });


      // Content slider
      var cards = ["#slide1", "#slide2", "#slide3", "#slide4", "#slide5", "#slide6", "#slide7", "#slide8"];
      var counter = 0;

      // Function to slide to next card
      function slideNext() {
            if(counter > 0) {
              counter--;
            }
            else {
              counter = cards.length - 1;
            }
            $('html,body').animate({
                  scrollTop: $(cards[counter]).offset().top},
                  'slow');
      }

      // Function to slide to previous card
      function slidePrev() {
            if(counter < cards.length - 1) {
              counter++;
            }
            else {
              counter = 0;
            }
            $('html,body').animate({
                  scrollTop: $(cards[counter]).offset().top},
                  'slow');
      }

      // Click on down arrow to slide to next card
      document.getElementById('prev').onclick = function() {
            slideNext();
      };

      // Click on up arrow to slide to previous card
      document.getElementById('next').onclick = function() {
            slidePrev();
      };

      // Press the up/down arrow to slide content
      $(document).keyup(function(e) {
        if (e.keyCode == 38) {
            slideNext();
        }
        if (e.keyCode == 40) {
            slidePrev();
        }
      });

      // Set counter to correct slide when using the navigation
      setCounter = function (slideNumber) {
            counter = slideNumber;
      }

});
