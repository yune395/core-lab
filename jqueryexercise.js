$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('body').addClass('changeColor')
      }
      if ($(this).scrollTop() < 50) {
         $('body').removeClass('changeColor')
      }
      if ($(this).scrollTop() > 50) {
         $('body').addClass('changeColor')
      }
   });
});


$(window).scroll(function(){
    $("#deadtree").css("opacity", 1 - $(window).scrollTop() / 300);
  });


  $(function(){  // $(document).ready shorthand
  $('.spring').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.spring').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'}, 9000);

            }

        });

    });

});

  $(function(){  // $(document).ready shorthand
  $('.spring').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('#cloud').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'}, 3000);

            }

        });

    });

});


$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.branch').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'}, 13000);

            }

        });

    });

});

$('#cloud').click(function(e){
        $('#sun').fadeIn('slow');
});

$('.branch').click(function(e){
        $('#flower').fadeIn('slow');
});
