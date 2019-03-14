$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('#vol1, #cyano2, #cyano6,').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).html( 'fully visible' );
                    $(this).css( {
                        transition: 'opacity 2s linear',
                        opacity: 1
                    } );

                } else {
                    $(this).html( 'fading in/out' );
                    $(this).css( {
                        transition: 'opacity 2s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                $(this).html( 'not visible' );
                $(this).css( 'opacity', 0 );
            }
        });
      }
      $('.fade').css( 'opacity', 0 );
      fade();
      $(window).scroll(function() {fade();});
  });




  $(document).ready(function(){
      $(window).scroll(function(){
          if ($(this).scrollTop() > 100) {
              $('#scroll').fadeIn('slow');
          } else {
              $('#scroll').fadeOut('slow');
          }
      });
      $('#scroll').click(function(){
          $("html, body").animate({ scrollTop: 0 }, 600);
          return false;
      });
  });

  $("#blossfelttext2").blur(function(){
  //we add the css class blur to the elements that we would like to blur on focus
      $("#blossfelttext2").addClass("blur");

  }).blur(function(){
  //we remove the blur class which will remove the blur from the elements specified when we are no longer focused on an input
      $("#blossfelttext2").removeClass("blur");
      $("#blossfelttext2").removeClass("blur");
  });







var images = ["AnnaAtkins_ChylocladiaClavellosa_0002_1000px_900x.jpg", "AnnaAtkins_Ptilotasericea_0002_1000px_900x.png",
"tumblr_n32kbbgihm1sagx63o7_1280.jpg","AnnaAtkins_Ceyloan_0002_1000px.png","ceylon-anna-atkins-and-anne-dixon.jpg","1_cvtfshXOMgTVQMa_QIPwQw.jpeg","rs-12712_1024x1024.jpg","atkins-papaver.jpg","atkins-ulva copy.jpg","Anna_Atkins_dPhotographs_of_British_Algae__Cyanotype_Impressions_1843_1853_RP-F-2016-133-00_-_uitsnede(5)[1].jpg",
"Anna-Atkins-Cyanotype-impression-Conserva-Linum-1843-1853.jpg","Atkins-A-plumosa.jpg","atkins-dictyojta.jpg"];

//a variable counter that we can change later
var counter = 0;

//Whenever we click our image do these things:
$('.cf2').click(function(){
//add to our counter
counter++;

//set a variable that we can use for our src in html
// we make the var = the name of our array[counter]
var url = images[counter];

//fade out our current image, you can change the "slow"
$( ".cf2" ).fadeOut("slow", function() {
//set the src of the img in html to the array src
  $(this).attr("src", url);
  //Now make the image fade back in
  $(this).fadeIn();
  });
//reset our counter when we run out of items in our array
if(counter > images.length - 1){
  counter = 0;
}
});

$('.question').click(function(e){
        $('#description').fadeIn('slow');
});

$('#cyano14').click(function(e){
$('#blossfelttext2').fadeIn('slow');
});


var myElement = document.getElementById("header");
var mySecondElement = document.getElementById('description')
var myThirdElement = document.getElementById("cyano")
var myGif = document.getElementById("anotherGif")
var anotherGifBlue = document.getElementById("anotherGifBlue")
var gifBlue = document.getElementById("gifBlue")
var Gif = document.getElementById("Gif")
var blossfelttext2 = document.getElementById("#blossfelttext2")
var cyano14=document.getElementById("cyano14")
console.log(myElement);


var i = 0;
function displayImage() {
  i++;
    if (i == 1){
      description.style.display = "block";
    }else{
      i = 0;
    }
}

var i=1;
function displaySecondImage(){
  if (i == 1) {
    i--;
    $('#anotherGifBlue').css('display',"block");
    $('#anotherGifBlue').fadeIn('slow');
    $('#anotherGifBlue').css('opacity',"1");
  }else{
    i++;
    $('#anotherGifBlue').fadeIn('slow');
    $('#anotherGifBlue').css('opacity',"0");
  }
}

var i=1;
function displaySecondGif(){
  if (i == 1) {
    i--;
    $('#gifBlue').css('display',"block");
    $('#gifBlue').fadeIn('slow');
    $('#gifBlue').css('opacity',"1");
  }else{
    i++;
    $('#gifBlue').fadeIn('slow');
    $('#gifBlue').css('opacity',"0");
  }
}


var toggle = function(){
  document.body.classList.toggle("switch")
}

myElement.onclick = displayImage
myGif.onclick = displaySecondImage;
anotherGifBlue.onclick = displaySecondImage

Gif.onclick = displaySecondGif;
gifBlue.onclick= displaySecondGif;
cyano14.onclick= startAnimation;
