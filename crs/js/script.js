$(document).ready(function(){
    $('.customers__cards').slick({
        dots: true,
        infinite: true,
        speed: 200,
        fade: true,
        appendDots: $('.buttons__left'),
        appendArrows: $('.buttons__right'),
        prevArrow: $('.left__arrow'),
        nextArrow: $('.right__arrow'),
      });      
  });

	
