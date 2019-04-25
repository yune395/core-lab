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
  $('#heartclick').fadeIn('slow');
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
   window.location.href='gamepage1practice.html';
});

// $('#answer2').click(function(){
//    window.location.href='nomatch.html';
//    $('#answer2').delay(5000);
// });
//
// $('#kaden2').click(function(){
//    window.location.href='nomatch.html';
//    $('#answer2').delay(5000);
// });


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
  $("div").fadeOut("slow");
  $("#like").fadeOut("slow");
  $("#dislikebutton").fadeOut("slow");
  $("#notification").fadeIn("slow");
  $("#match").show("slow");
    $("#keepswiping").show("slow");
    $("#keepswipingtext").show("slow");
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
  "correctAnswer": "did you get sacrificed by the God of Fire ? Because you’re smoking!",
  "answer2": "I may not be the one who lived, but I can still be your chosen one.",
  "answer3": "Are you a Snitch? Because you’re by far the greatest catch here.",
},
{
  "name":"Charlie,",
  "age": 20,
  "bio": "I LOVE cats. I’m okay with being 4ever alone with 50 cats, but maybe we can raise them 2gether?",
  "correctAnswer": "MEOW you doin?",
  "answer2": "Yeah, I like to chase my tail, but I’d much rather chase yours.",
  "answer3": "If you were vegetable, you’d be a cute-cumber.",
},
{
  "name":"Daryl,",
  "age": 28,
  "bio": "#420friendly #blazeitdon’tpraiseit #snoopdog dude, lets smoke.",
  "correctAnswer": 45,
  "answer2": 34,
  "answer3": 2,
},
{
  "name":"Harley,",
  "age": 28,
  "bio": "Trying to find someone to come with me to a rave and be my EDM QUEEN.",
  "correctAnswer": 78,
  "answer2": 4,
  "answer3": 7,
},
{
  "name":"Jesse,",
  "age": 28,
  "bio": "i love jazz!",
  "correctAnswer": 35,
  "answer2": 5,
  "answer3": 9,
},
{
  "name":"Kyle,",
  "age": 28,
  "bio": "I love Minecraft and gaming:)",
  "correctAnswer": 2,
  "answer2": 9,
  "answer3": 4,
},
{
  "name":"Lou,",
  "age": 28,
  "bio": "artsy! let’s spend our days together painting all day during sunset.",
  "correctAnswer":09,
  "answer2": 3,
  "answer3": 6,
},
{
  "name":"Reed,",
  "age": 28,
  "bio": "I love being in nature. Let’s live in the forrest and save Mother Earth. ",
  "correctAnswer": 24,
  "answer2": 45,
  "answer3": 3,
},
{
  "name":"Sam,",
  "age": 28,
  "bio": "Aspiring doctor. NYU. I might be able to save your life one day;)",
  "correctAnswer": 25,
  "answer2": 87,
  "answer3": 5,
},
{
  "name":"Val,",
  "age": 28,
  "bio": "gainz all day. looking for my gym partner so we can stunt on everyone with our muscles.",
  "correctAnswer": 45,
  "answer2": 2,
  "answer3": 6,
},
{
  "name":"Winter,",
  "age": 28,
  "bio": "dancing is my life. ",
  "correctAnswer": 36,
  "answer2": 37,
  "answer3": 6,
},
{
  "name":"Stevie,",
  "age": 28,
  "bio": "photo major. Looking for models and friends. let’s link and shoot!",
  "correctAnswer": 9,
  "answer2": 7,
  "answer3": 3,
},
{
  "name":"Spencer,",
  "age": 28,
  "bio": "Software engineer working for a design agency. Let me fix your computer lol.",
  "correctAnswer": 6,
  "answer2": 4,
  "answer3": 2,
},
{
  "name":"Sean,",
  "age": 21,
  "bio": "animal lover!! My dog, Jack, is my best friend 4life. If you have a furry friend, let’s hang!",
  "correctAnswer": 5,
  "answer2": 6,
  "answer3": 3,
},
{
  "name":"Peyton,",
  "age": 21,
  "bio": "Filmmaker in NYC. Who’s your favorite director?",
  "correctAnswer": 4,
  "answer2": 2,
  "answer3": 8,
},
{
  "name":"Graham,",
  "age": 28,
  "bio": "Fitness Maniac! If I’m not working, you can catch me at the gym. Let’s bulk.",
  "correctAnswer": 7,
  "answer2": 5,
  "answer3": 4,
},
{
  "name":"Jan,",
  "age": 24,
  "bio": "Illustrator. Message me and I’ll possibly draw a portrait of you!",
  "correctAnswer": 3,
  "answer2": 7,
  "answer3": 9,
},
{
  "name":"Mitchell,",
  "age": 25,
  "bio": "Interested in science and biology! currently studying at NYU Stern.",
  "correctAnswer": 0,
  "answer2": 2,
  "answer3": 6,
},
{
  "name":"Ray,",
  "age": 23,
  "bio": "Hopeless romantic. Looking for a serious relationship. ",
  "correctAnswer": 4,
  "answer2": 3,
  "answer3": 6,
},
{
  "name":"Max,",
  "age": 20,
  "bio": "creating my own fashion line. only name brands or gtfo",
  "correctAnswer": 7,
  "answer2": 09,
  "answer3": 34,
},
{
  "name":"Monroe,",
  "age": 21,
  "bio": "i love Harry Potter. I’m definitely Griffindor, wbu? :)",
  "correctAnswer": 64,
  "answer2": 3,
  "answer3": 7,
},
{
  "name":"Ken,",
  "age": 23,
  "bio": "Vegan. THE MEAT INDUSTRY KILLS.",
  "correctAnswer": 3,
  "answer2": 4,
  "answer3": 9,
},
{
  "name":"Louise,",
  "age": 21,
  "bio": "I’m a scorpio. I’m crazy and spontaneous.",
  "correctAnswer": 2,
  "answer2": 0,
  "answer3": 54,
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
var divAppend = ["<div class='answerclass' id='answer1'><div class='answertext' id='answer1text'></div></div>",
                  "<div class='answerclass' id='answer2'><div class='answertext' id='answer2text'></div></div>" ,
                  "<div class='answerclass' id='answer3'><div class='answertext' id='answer3text'></div></div>"];
var divNum = Math.floor(Math.random() * divAppend.length);

// append pick up lines (that correspond to a specific person)
// get specific person
// get pick up lines
// append:
$("#answers").append(divAppend[0]);
$("#answers").append(divAppend[2]);
$("#answers").append(divAppend[1]);

// one of those pick up lines needs a correct tag
var answers = $("#answers").find(".answerclass"),
  amountOfAnswers = answers.length;
  var ourcorrectAnswer = Math.floor(Math.random() * answers.length);
  console.log(ourcorrectAnswer) // give us an index for the correct answer

  $(".answerclass").eq(ourcorrectAnswer).addClass("correctAnswer").find(".answertext").text(bios[randomNumber]["correctAnswer"])
  // $("#answer1text").text(bios[randomNumber]["correctAnswer"]);

  var firstanswer = Math.ceil(Math.random()*2) // choose the order of the other answers

  $(".answerclass").each(function(){
    if(!$(this).hasClass("correctAnswer")){
      console.log(firstanswer)
      if(firstanswer == 1){
          $(this).find(".answertext").text(bios[randomNumber]["answer3"])
          firstanswer = 2;// update firstanswer so that second answer is assigned to the other answer
      }else{
        $(this).find(".answertext").text(bios[randomNumber]["answer2"])
        firstanswer = 1;// update firstanswer so that second answer is assigned to the other answer
      }

    }
  })
  // maybe add the on click functions here

  // $("#answer2text").text(bios[randomNumber]["answer2"])
  //$("#answer3text").text(bios[randomNumber]["answer3"])
  $("#answers").show();
})



$("#answer1text").click(function(){
$('#notification').fadeIn('slow');
  // HEART ANIMATION = CORRECT
// //
// })

$("#answer2text").click(function(){
  // BROKEN HEART ANIMATION = INCORRECT
})

$("#answer3text").click(function(){
  // BROKEN HEART ANIMATION = INCORRECT
})
