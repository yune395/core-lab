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


$("#begin").click(function(){
  $("div").fadeOut();
  $('#description').fadeIn('slow');
  $('#intropageclick').fadeIn('slow');
});



//



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


$('#keepswiping').click(function(){
   window.location.href='gamepage2practice.html';
});

$('#answer2').click(function(){
   window.location.href='nomatch.html';
   $('#answer2').delay(5000);
});

$('#kaden2').click(function(){
   window.location.href='nomatch.html';
   $('#answer2').delay(5000);
});


/*$('#answer1text').click(function(){
   window.location.href='match.html';
});*/
/*$('#like').click(function(e){
  $('#answer1,#answer1text, #answer2, #answer2text, #answer3, #answer3text').fadeIn('slow');
});*/

$('#option1').click(function(e){
  $('#div').fadeOut('slow');
    $('#div').fadeIn('slow');
});

$('#like2').click(function(e){
  $('#option1,#option1text, #option2, #option2text, #option3, #option3text').fadeIn('slow');
});

// $('#option2').click(function(){
//    window.location.href='match.html';
// });

$('#option3').click(function(){
   window.location.href='nomatch.html';
});

//like page for alex//
// $('#like').click(function(){
//    window.location.href='alex.html';
// });
// $('#like1').click(function(){
//    window.location.href='bobbie.html';
// });

//alex match alert

$("#answer1text").click(function(){
  $("#notification").fadeIn("slow");
});
$("#notification").click(function(){
$("#notification").fadeOut("slow");
 window.location.href='gamepage1practice.html';
});

//kaden
$("#kaden3text").click(function(){
  $("#notificationkaden").fadeIn("slow");
  $(".dismiss").fadeIn("slow");
});

var bios = [
{
  "name":"Alex,",
  "age": 23,
  "bio": "Live. Love. Jesus. Looking for someone with the same passion for JC as I do!",
  "correctAnswer": "Are you an angel because my world suddenly became brighter and lighter?",
  "answer2": "All I want for Channukah is you.",
  "answer3": "Even if there wasn't gravity on earth, I'd still fall for you.",
},
{
  "name":"Bobbie,",
  "age": 22,
  "bio": "Graphic Designer! I can code your website only if we get coffee sometime lol.",
  "correctAnswer": 3,
  "answer2": 9,
  "answer3": 22,
},
{
  "name":"Ari,",
  "age": 24,
  "bio": "If you’re not just as obsessed with Game of Thrones as I am, we can’t be friends..",
  "correctAnswer": 87,
  "answer2": 11,
  "answer3": 0,
},
{
  "name":"Charlie,",
  "age": 20,
  "bio": "I LOVE cats. I’m okay with being 4ever alone with 50 cats, but maybe we can raise them 2gether?",
  "correctAnswer": 9,
  "answer2": 4,
  "answer3": 7,
},
{
  "name":"Daryl,",
  "age": 28,
  "bio": "#420friendly #blazeitdon’tpraiseit #snoopdog dude, lets smoke.",
  "correctAnswer": "hello",
  "answer2": 83,
  "answer3": 7,
},
{
  "name":"Harley,",
  "age": 28,
  "bio": "Trying to find someone to come with me to a rave and be my EDM QUEEN.",
  "correctAnswer": "hello",
  "answer2": 83,
  "answer3": 7,
},
{
  "name":"Jesse,",
  "age": 28,
  "bio": "i love kpop! BTS all day everyday. let’s listen together?",
  "correctAnswer": "hello",
  "answer2": 83,
  "answer3": 7,
},
{
  "name":"Kyle,",
  "age": 28,
  "bio": "I love Minecraft and gaming:)",
  "correctAnswer": "hello",
  "answer2": 83,
  "answer3": 7,
},
{
  "name":"Lou,",
  "age": 28,
  "bio": "art hoe;) let’s spend our days together painting all day during sunset.",
  "correctAnswer": 86,
  "answer2": 83,
  "answer3": 7,
},
{
  "name":"Reed,",
  "age": 28,
  "bio": "I love being in nature. Let’s live in the forrest and save Mother Earth. ",
  "correctAnswer": "hello",
  "answer2": 83,
  "answer3": 7,
},
{
  "name":"Sam,",
  "age": 28,
  "bio": "Aspiring doctor. NYU. I might be able to save your life one day;)",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Val,",
  "age": 28,
  "bio": "gainz all day. looking for my gym partner so we can stunt on everyone with our muscles.",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Winter,",
  "age": 28,
  "bio": "dancing is my life. ",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Stevie,",
  "age": 28,
  "bio": "photo major. Looking for models and friends. let’s link and shoot!",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Spencer,",
  "age": 28,
  "bio": "Software engineer working for a design agency. Let me fix your computer lol.",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Sean,",
  "age": 21,
  "bio": "animal lover!! My dog, Jack, is my best friend 4life. If you have a furry friend, let’s hang!",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Peyton,",
  "age": 21,
  "bio": "Filmmaker in NYC. Who’s your favorite director?",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Graham,",
  "age": 28,
  "bio": "Fitness Maniac! If I’m not working, you can catch me at the gym. Let’s bulk.",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Jan,",
  "age": 24,
  "bio": "Illustrator. Message me and I’ll possibly draw a portrait of you!",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Mitchell,",
  "age": 25,
  "bio": "Interested in science and biology! currently studying at NYU Stern.",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Ray,",
  "age": 23,
  "bio": "Hopeless romantic. Looking for a serious relationship. ",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Max,",
  "age": 20,
  "bio": "creating my own fashion line. only name brands or gtfo",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Monroe,",
  "age": 21,
  "bio": "i love Harry Potter. I’m definitely Griffindor, wbu? :)",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Ken,",
  "age": 23,
  "bio": "Vegan. THE MEAT INDUSTRY KILLS.",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},
{
  "name":"Louise,",
  "age": 21,
  "bio": "I’m a scorpio;) I’m crazy and spontaneous. Looking for a Cancer to handle me. ",
  "correctAnswer": "hello",
  "answer2": "hello",
  "answer3": "hello",
},




]

$("#answers").hide();

var randomNumber = Math.floor(Math.random() * bios.length);
console.log(randomNumber)

$(".user").text(bios[randomNumber]["name"])
$(".userbio").text(bios[randomNumber]["bio"])
$(".age").text(bios[randomNumber]["age"])

$("#dislikebutton").click(function(){
  var randomNumber = Math.floor(Math.random() * bios.length);
  console.log(randomNumber)

  $(".user").text(bios[randomNumber]["name"])
  $(".userbio").text(bios[randomNumber]["bio"])
  $(".age").text(bios[randomNumber]["age"])
})

$("#like").click(function(){
var divAppend = ["<div id='answer1'><div id='answer1text'></div></div>", "<div id='answer2'><div id='answer2text'></div></div>" , "<div id='answer3'><div id='answer3text'></div></div>"];
var divNum = Math.floor(Math.random() * divAppend.length);

$("#answers").append(divAppend[0]);
$("#answers").append(divAppend[2]);
$("#answers").append(divAppend[1]);

  $("#answer1text").text(bios[randomNumber]["correctAnswer"]);
  $("#answer2text").text(bios[randomNumber]["answer2"])
  $("#answer3text").text(bios[randomNumber]["answer3"])
  $("#answers").show();
})

var correctResponses = 0;

$("#answer1text").click(function(){
$('#notification').fadeIn('slow');
  // HEART ANIMATION = CORRECT
  correctResponses++;

})

$("#answer2text").click(function(){
  // BROKEN HEART ANIMATION = INCORRECT
})

$("#answer3text").click(function(){
  // BROKEN HEART ANIMATION = INCORRECT
})


/*var dislike = document.getElementById("#dislikebutton");
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

  /*var items = [container, container2, container3, 4, 5, 6, 7, 8, 9];
  $('#dislikebutton').click(function() {
    var rand = items[Math.floor(Math.random() * items.length)];
    $('#display').text(rand);
    items.splice(items.indexOf(rand), 1);
  })*/

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
