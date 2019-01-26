// Global scope
var setCounter;

$(document).ready(function() {

      // Responsive navigation
      var t1 = new TimelineMax({paused: true});

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

      t1.to(".menu", 1, {
           top: "0%",
           ease: Expo.easeInOut,
           delay: -1
      });

      t1.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.2);

      t1.reverse();
      $(document).on("click", ".toggle-btn", function() {
           t1.reversed(!t1.reversed());
      });
      $(document).on("click", ".data a", function() {
            t1.reversed(!t1.reversed());
      });


      // Content slider
      var cards = ["#slide1", "#slide2", "#slide3", "#slide4", "#slide5", "#slide6", "#slide7", "#slide8"];
      var counter = 0;

      document.getElementById('prev').onclick = function() {
            if(counter > 0) {
              counter--;
            }
            else {
              counter = cards.length - 1;
            }
            $('html,body').animate({
                  scrollTop: $(cards[counter]).offset().top},
                  'slow');
      };

      document.getElementById('next').onclick = function() {
            if(counter < cards.length - 1) {
              counter++;
            }
            else {
              counter = 0;
            }
            $('html,body').animate({
                  scrollTop: $(cards[counter]).offset().top},
                  'slow');
      };

      setCounter = function (slideNumber) {
            counter = slideNumber;
      }
});
