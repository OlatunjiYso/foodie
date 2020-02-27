$(document).ready(function() {

  /* Sticky nav scroll */
  $('.js--section-features').waypoint(function(direction){
    if (direction === "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });

// Hero Button handler
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

// hero button handler
  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top}, 500);
  });


// Click handler for navigation
$('a').click(function() {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body')
        .animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
          window.location.hash = hash;
        });
      }
});

// click handler for logo
$('.logo-black').click(function() {
  $('html, body')
        .animate({
          scrollTop: $('.header').offset().top
        }, 600, function(){
          window.location.hash = '';
        });
});


// Scroll animation hanlde
$('.animate-plans-section').waypoint(function() {
  $('.animate-plans-section').addClass('animated fadeInDown');
}, { offset: '30%' });




 
});

