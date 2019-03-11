$('#header').click(function(e){
        $('#description').fadeIn('slow');
});






$(document).ready(function() {

  var n = -1
  , imgs = $("#cf2 img")
  , fx = function(i, el) {
      return (el || imgs.eq(i)).fadeToggle(1000);
    };

  $("#cf_onclick, #cf2 img").click(function() {

    if (n === (-imgs.length)) {
      fx(n);
      n = -1;
      fx(null, imgs);
    } else {
      fx(n);
      --n
    };

  });

});
console.log("hello world!");

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
