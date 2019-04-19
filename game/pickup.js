$("#rectangle").click(function(){
  $("div").fadeOut();
});

$("#intropageclick").click(function(){
  $("div").fadeOut();
});

$(".profile1").click(function(){
  $("div").fadeOut();
  $("#mail").fadeOut();

});

$('#intropageclick').click(function(e){
    $("div").fadeOut();
        $('#description').fadeIn('slow');
        $('#heartclick').fadeIn('slow');
});

$('#heartclick').click(function(e){
        $('#div').fadeIn('slow');
});

$('.profile1').click(function(e){
        $('#div').fadeIn('slow');

});
/*$('#dislikebutton').click(function(e){
        $('.alex').hide('none');
        $('.alexbio').hide('none');
        $('#container').hide('none');
        $('#container2').fadeIn('slow');
        $('.bobbie').fadeIn('slow');
        $('.bobbiebio').fadeIn('slow');
});
$('#dislikebutton').click(function(e){
  $('#container2').hide('none');
  $('#container3').fadeIn('slow');

});*/

var dislike = document.getElementById("#dislikebutton");
var container = document.getElementById("#container");
var container1 = document.getElementById("#container1");
var container2 = document.getElementById("#container2");
var container3 = document.getElementById("#container3");/*


var i = 0;

function displayContainer() {
i++;
  if (i == 1){
    container.style.display = "none";
  }else if(i == 2){
    container2.style.display = "block";
  }else if(i == 3){
    circle3.style.display = "block";
  }else{
    i = 1;
  }
}
dislike.onclick = displayContainer;*/

/*$('#dislikebutton').on('click', function(){
    // Change to the next image
    $('#container2' + currentImage).stop().fadeOut(1);
    increaseImage();
    $('#container' + currentImage).stop().fadeIn(1);
  });*/

  var items = [container, container2, container3, 4, 5, 6, 7, 8, 9];
  $('#dislikebutton').click(function() {
    var rand = items[Math.floor(Math.random() * items.length)];
    $('#display').text(rand);
    items.splice(items.indexOf(rand), 1);
  })

//window.onload = function(){
  //  window.setTimeout('document.getElementById("mail").style.display = "inline";',2000);
//}

//window.onload = function(){
  //  window.setTimeout('document.getElementById("circle").style.display = "inline";',1000);
//}


//$("#option1").on("click",function(){
  //  $("#option1answer").css("display","block")
  //  $("#option1answer").css("display","block")

//});
