var images = ["nypl.digitalcollections–Chordaria-flagelliformis-large_resized.jpg",
"AnnaAtkins_Ptilotasericea_0002_1000px_900x.jpg",
"AnnaAtkins_ChylocladiaClavellosa_0002_1000px_900x.jpg",
"tumblr_n32kbbgihm1sagx63o7_1280.jpg"];
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
})

$('.question').click(function(e){
        $('#description').fadeIn('slow');

});
$(".question").click(function(){
        $("#description").toggle();
    });



var myElement = document.getElementById("header");
var mySecondElement = document.getElementById('description')
var myThirdElement = document.getElementById("cyano")
var myGif = document.getElementById("anotherGif")
var anotherGifBlue = document.getElementById("anotherGifBlue")
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
    $('#anotherGifBlue').css('display',"block")
    $('#anotherGifBlue').fadeIn('slow');
    $('#anotherGifBlue').css('opacity',"1");
  }else{
    i++;
    $('#anotherGifBlue').fadeIn('slow');
    $('#anotherGifBlue').css('opacity',"0");
  }
}


var toggle = function(){
  document.body.classList.toggle("switch")
}

var Gif = document.getElementById("gif");
var playGif = function(){
  // Gif.classList.toggle("pause");
  Gif.src="1489429990_blackflower.gif2.gif";
  if(Gif.src == "1489429990_blackflower.gif2.gif"){
    Gif.src="flower.png";
  }
}
myElement.onclick = displayImage
myGif.onclick = displaySecondImage;
anotherGifBlue.onclick = displaySecondImage;
Gif.onclick = playGif;
