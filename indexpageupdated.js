$("#right").click(function(){

// to make a button going the other way:
// swap out next for prev
// swap out animated css values for their opposite (either "right" or 50% instead of -50)

	$(".box").each(function(){
  	if($(this).hasClass("current")){


      var thisBox = $(this)
      var thisNextBox = $(this).next()

    	 $(this).animate({
            left: '-50%'
        }, 500, function() {
            $(this).css('left', '150%');
            $(this).appendTo('#container');
						thisBox.removeClass("current")
        });

        $(this).next().animate({
            left: '50%'
        }, 500, function(){
					thisNextBox.addClass("current")
        });
    }
  })

})

$("#left").click(function(){

// to make a button going the other way:
// swap out next for prev
// swap out animated css values for their opposite (either "right" or 50% instead of -50)

	$(".box").each(function(){
  	if($(this).hasClass("current")){


      var thisBox = $(this)
      var thisLastBox = $(".box").last()
      console.log(thisBox.index(), thisLastBox)

      // add last element to beginning
      thisLastBox.prependTo("#container").css('left', "-50%")
      // then animate our element out of the way
    	 thisBox.animate({
            left: '120%'
        }, 500, function() {
            $(this).css('left', '150%');
            // $(this).prependTo('#container');
						thisBox.removeClass("current")
        });



        thisLastBox.animate({
            left: '50%'
        }, 500, function(){
					thisLastBox.addClass("current")
          console.log(thisLastBox)
        });
    }
  })

})
