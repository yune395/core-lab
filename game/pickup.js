var correctGuesses = 0;
$(this).css("background-color","green");

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
  "distance" : "3 miles away",
  "bio": "Live. Love. Jesus. Looking for someone with the same passion for JC as I do!",
  "correctAnswer": "Are you an angel because my world suddenly became brighter and lighter?",
  "answer2": "All I want for Channukah is you.",
  "answer3": "Even if there wasn't gravity on earth, I'd still fall for you.",
},
{
  "name":"Bobbie,",
  "age": 22,
  "distance" : "1 mile away",
  "bio": "Graphic Designer! I can code your website only if we get coffee sometime lol.",
  "correctAnswer": "are you CSS? Cause you got class",
  "answer2": "You are like a semicolon, without you everything falls apart",
  "answer3": 22,
},
{
  "name":"Ari,",
  "age": 24,
  "distance" : "5 miles away",
  "bio": "If you’re not just as obsessed with Game of Thrones as I am, we can’t be friends..",
  "correctAnswer": "did you get sacrificed by the God of Fire ? Because you’re smoking!",
  "answer2": "I may not be the one who lived, but I can still be your chosen one.",
  "answer3": "Are you a Snitch? Because you’re the finest catch here.",
},
{
  "name":"Charlie,",
  "age": 20,
  "distance" : "5 miles away",
  "bio": "I LOVE cats. I’m okay with being 4ever alone with 50 cats, but maybe we can raise them 2gether?",
  "correctAnswer": "MEOW you doin?",
  "answer2": "Yeah, I like to chase my tail, but I’d much rather chase yours.",
  "answer3": "If you were vegetable, you’d be a cute-cumber.",
},
{
  "name":"Daryl,",
  "age": 28,
  "distance" : "4 miles away",
  "bio": "#420friendly #blazeitdon’tpraiseit #snoopdog dude, lets smoke.",
  "correctAnswer": "I have a huge kush on you.",
  "answer2": "Is it hot in here or is that just the Holy Spirit burning inside of you?",
  "answer3": "Are you a cigarette because you've got a hot butt.",
},
{
  "name":"Harley,",
  "age": 28,
  "distance" : "5 miles away",
  "bio": "I'm a mormon. Let's go on missions and spread the word.",
  "correctAnswer": "Hey, are you the sword of Laban? Because you are exceedingly fine.",
  "answer2": "Have I met you before? Maybe it was in a previous lifetime.",
  "answer3": "Would you like to come over and meditate with me?",
},
{
  "name":"Ed,",
  "age": 22,
  "distance" : "1.1 miles away",
  "bio": "English major. Trying to become the next big YA author.",
  "correctAnswer": "I have ‘Great expectations’ for our future.",
  "answer2": "You must be reading Fahrenheit 451, because you're smokin'!",
  "answer3": "If you were President, you'd be Babe-raham Lincoln.",
},
{
  "name":"Jesse,",
  "age": 28,
  "distance" : "1.5 miles away",
  "bio": "i love jazz!",
  "correctAnswer": "You had me at cello!",
  "answer2": "I got my eyes on you, you're everything that I see...",
  "answer3": "Call me AC/DC, because I'm gonna rock your world!",
},
{
  "name":"Kyle,",
  "age": 28,
  "distance" : "2 miles away",
  "bio": "I love gaming:) especially Super Mario Bros.",
  "correctAnswer": "I don't need a mushroom for my love for you to grow.",
  "answer2": "Our love is like dividing by zero... you cannot define it.",
  "answer3": "Baby is your name pac-man ? Cause every time I see you I want to chase you.",
},
{
  "name":"Lou,",
  "age": 28,
  "distance" : "3 miles away",
  "bio": "Let’s spend our days together painting all day during sunset.",
  "correctAnswer": "You’re so fine you could make an impression on Monet.",
  "answer2": "",
  "answer3": 6,
},
{
  "name":"Reed,",
  "age": 28,
  "distance" : "3 miles away",
  "bio": "I love being in nature. Let’s live in the forrest and save Mother Earth. ",
  "correctAnswer": "You're more precious than a recently-planted tree in a country with high levels of deforestation.",
  "answer2": "",
  "answer3": 3,
},
{
  "name":"Sam,",
  "age": 28,
  "distance" : "4.5 miles away",
  "bio": "Aspiring doctor. NYU. I might be able to save your life one day;)",
  "correctAnswer": "My doctor says I'm lacking vitamin U.",
  "answer2": "Do you work at Little Caesars? Because you're Hot and I'm Ready",
  "answer3": 5,
},
{
  "name":"Val,",
  "age": 28,
  "distance" : "1 mile away",
  "bio": "gainz all day. No carbs diet. Looking for my gym partner so we can stunt on everyone with our muscles.",
  "correctAnswer": "kissing burns 6.4 calories a minute. Wanna workout? ",
  "answer2": "is your body from McDonald's? 'cause I'm lovin' it!",
  "answer3": "",
},
{
  "name":"Winter,",
  "age": 28,
  "distance" : "1 mile away",
  "bio": "dancing is my life. ",
  "correctAnswer": "I'll rondversé with you any day.",
  "answer2": "You must be a choir director, because you make my heart sing!",
  "answer3": "You must be a C major scale.. All natural.",
},
{
  "name":"Stevie,",
  "age": 28,
  "distance" : "1 mile away",
  "bio": "photo major. Looking for models and friends. let’s link and shoot!",
  "correctAnswer": "We can take it slow, and see how things develop.",
  "answer2": "Before you came along, I was just Lipsum. With you, I’d be real content.",
  "answer3": "With you, I'd never stop().",
},
{
  "name":"Spencer,",
  "age": 28,
  "distance" : "1 mile away",
  "bio": "Software engineer working for a design agency. Let me fix your computer lol.",
  "correctAnswer": "Hey, my name's Microsoft. Can I crash at your place tonight?",
  "answer2": "My love for you is like pi... never ending.",
  "answer3": "Our love can cross the Univers.",
},
{
  "name":"Sean,",
  "age": 21,
  "distance" : "2 miles away",
  "bio": "Always at Tompkins Square Park with my dog, Jack. He's my best friend 4life. If you're a dog lover too, We def will get along.",
  "correctAnswer": "A day with you would be like an eternity of behind-the-ear scratches.",
  "answer2": "My love for you is like a hairball - I can't hold it in.",
  "answer3": 3,
},
{
  "name":"Peyton,",
  "age": 21,
  "distance" : "2 miles away",
  "bio": "Film fanatic! I love staying home and watching comedy movies.",
  "correctAnswer": "Are you THE MATRIX, 'cause I'M THE ONE.",
  "answer2": "I'll be your farm boy if you'll be my princess bride ",
  "answer3": "I hate to see you go, I love to watch you leave.",
},
{
  "name":"Graham,",
  "age": 28,
  "distance" : "2 miles away",
  "bio": "Visiting from France for short while! Trying to make new friends.",
  "correctAnswer": "Are you sure you're not a tower? Because Eiffel for you.",
  "answer2": "Are you from Tennessee? Because you're the only ten I See!",
  "answer3": "You must be from Prague, because I can't help but Czech you out.",
},
{
  "name":"Jan,",
  "age": 24,
  "distance" : "3 miles away",
  "bio": "Illustrator. Message me and I’ll possibly draw a portrait of you!",
  "correctAnswer": "",
  "answer2": 7,
  "answer3": 9,
},
{
  "name":"Mitchell,",
  "age": 25,
  "distance" : "3.5 miles away",
  "bio": "Interested in science and biology! currently studying at NYU Stern.",
  "correctAnswer": "Is it getting hot in here? Or is it just our bond forming?",
  "answer2": 1,
  "answer3": "I hope interest rates are low, because I want to invest my time in you.",
},
{
  "name":"Ray,",
  "age": 23,
  "distance" : "2 miles away",
  "bio": "Hopeless romantic. Looking for a serious relationship and humble person.",
  "correctAnswer": "Do you believe in love at first sight or should I walk past again?",
  "answer2": "well, HERE I AM. What are your other two wishes?",
  "answer3": "you look ill. You must be suffering from a lack of Vitamin ME.",
},
{
  "name":"Max,",
  "age": 20,
  "distance" : "2 miles away",
  "bio": "signed to NY MODELS. I only wear name brands and Gucci slippers.",
  "correctAnswer": "You know what would look great on you? Me.",
  "answer2": "Were you born in a farm? You look a-maize-ing.",
  "answer3": "",
},
{
  "name":"Monroe,",
  "age": 21,
  "distance" : "2 miles away",
  "bio": "i love Harry Potter. I’m definitely Griffindor, wbu? :)",
  "correctAnswer": "You can have the portkey to my heart.",
  "answer2": "Hi. The voices in my head just told me to come talk to you.",
  "answer3": "Am I dead? Because I think I just met an angel.",
},
{
  "name":"Ken,",
  "age": 23,
  "distance" : "2 miles away",
  "bio": "Vegan. THE MEAT INDUSTRY KILLS.",
  "correctAnswer": "I’m willing to give up meat — but I’d never give up you.",
  "answer2": "Your name must be Coca Cola, because you're so-da-licious.",
  "answer3": "if you were a fruit you'd be a fineapple.",
},
{
  "name":"Louise,",
  "age": 21,
  "distance" : "7 miles away",
  "bio": "I love horoscopes! I'm an Aries and Cancer rising, hbu.",
  "correctAnswer": "What's your Co-star?",
  "answer2": 3,
  "answer3": 54,
},




]

$("#answers").hide();

var randomNumber = Math.floor(Math.random() * bios.length);
// console.log(randomNumber)

$(".user").text(bios[randomNumber]["name"])
$(".userbio").text(bios[randomNumber]["bio"])
$(".age").text(bios[randomNumber]["age"])

$("#dislikebutton").click(function(){
  var randomNumber = Math.floor(Math.random() * bios.length);
  // console.log(randomNumber)

  $(".user").text(bios[randomNumber]["name"])
  $(".userbio").text(bios[randomNumber]["bio"])
  $(".age").text(bios[randomNumber]["age"])
})

$("#like").one('click',function(){

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
});

$("#like").click(function(){
// one of those pick up lines needs a correct tag
var answers = $("#answers").find(".answerclass"),
  amountOfAnswers = answers.length;
  var ourcorrectAnswer = Math.floor(Math.random() * answers.length);
  // console.log(ourcorrectAnswer) // give us an index for the correct answer

  $(".answerclass").eq(ourcorrectAnswer).addClass("correctAnswer").find(".answertext").text(bios[randomNumber]["correctAnswer"])

  // $("#answer1text").text(bios[randomNumber]["correctAnswer"]);

  var firstanswer = Math.ceil(Math.random()*2) // choose the order of the other answers

  $(".answerclass").each(function(){
    if(!$(this).hasClass("correctAnswer")){
      // console.log(firstanswer)
      if(firstanswer == 1){
          $(this).find(".answertext").text(bios[randomNumber]["answer3"])
          firstanswer = 2;// update firstanswer so that second answer is assigned to the other answer
      } else{
        $(this).find(".answertext").text(bios[randomNumber]["answer2"])
        firstanswer = 1;// update firstanswer so that second answer is assigned to the other answer
      }
    } else{
      $(this).removeClass("answerclass");
    }
  })

//click the right answer, heart animation/text fades in
  $(".correctAnswer").click(function(){
    $('#rose').fadeIn('slow');
    $('.wrong').hide();
    correctGuesses++;
    console.log("correct:", correctGuesses);
   $('#notification').fadeIn('slow');
   $('#match').fadeIn('slow');
   //$('#keepswiping').fadeIn('slow');
    $('#keepswipingtext').fadeIn('slow');
    $( ".keepswipingtext" ).removeClass();
    $('#notification').removeClass('blurfilter');
    $('div').addClass('blurfilter');
    $('#like').addClass('blurfilter');
    $('#dislikebutton').addClass('blurfilter');
      //Add that person to your match list
      $(".matches").html(bios[randomNumber]["name"])
   });

//click the wrong answer, broken heart and text fades in
$(".answerclass").click(function(){
        $('.wrong').show();
        $('div').addClass('blurfilter');
        $('#nomatch').fadeIn('slow');
        $('#brokenheart').fadeIn('slow');
        // $('div').addClass('blurfilter');
        $('.wrong').removeClass('blurfilter');
        $('#keepswipingtext').fadeIn('slow');
        $( ".keepswipingtext" ).removeClass();
        });

//remove blur filter on heart animation and text



$('#keepswipingtext').click(function(){
  // Instead of reload
  $("#match" ).hide();
  $("#nomatch" ).hide();
  $("#brokenheart").hide();
  $( "#rose" ).hide();
   $("#answers").hide();
   $("#answers").css("top","0vh");
   $("#like").css("opacity","1");
   $('#notification').hide();
   $('#keepswipingtext').hide();
  $('div').removeClass('blurfilter');
 $('#like').removeClass('blurfilter');
  $("#dislikebutton").show();
 $('#dislikebutton').removeClass('blurfilter');

 var randomNumber = Math.floor(Math.random() * bios.length);
 $(".user").text(bios[randomNumber]["name"])
 $(".userbio").text(bios[randomNumber]["bio"])
 $(".age").text(bios[randomNumber]["age"])
  // Repeat the answer process of randomizing and changing the text
  // var answers = $("#answers").find(".answerclass"),
  //   amountOfAnswers = answers.length;
  //   var ourcorrectAnswer = Math.floor(Math.random() * answers.length);
  //   // console.log(ourcorrectAnswer) // give us an index for the correct answer
  //
  //   $(".answerclass").eq(ourcorrectAnswer).addClass("correctAnswer").find(".answertext").text(bios[randomNumber]["correctAnswer"])
  //   // $("#answer1text").text(bios[randomNumber]["correctAnswer"]);
  //
  //   var firstanswer = Math.ceil(Math.random()*2) // choose the order of the other answers
  //
  //   $(".answerclass").each(function(){
  //     if(!$(this).hasClass("correctAnswer")){
  //       // console.log(firstanswer)
  //       if(firstanswer == 1){
  //           $(this).find(".answertext").text(bios[randomNumber]["answer3"])
  //           firstanswer = 2;// update firstanswer so that second answer is assigned to the other answer
  //       }else{
  //         $(this).find(".answertext").text(bios[randomNumber]["answer2"])
  //         firstanswer = 1;// update firstanswer so that second answer is assigned to the other answer
  //       }
  //
  //     }
  //   })
  // window.location.href='gamepage1practice.html';
});


  // maybe add the on click functions here

  // $("#answer2text").text(bios[randomNumber]["answer2"])
  //$("#answer3text").text(bios[randomNumber]["answer3"])
  $("#answers").show();
  $("#answers").css("top","-20vh");
  $("#like").css("opacity","0");
})

$("#like").click(function() {
    $('html,body').animate({
        scrollTop: $("#answers").offset().top},
        'slow');
  $( "#dislikebutton" ).hide();

});

$("#matchestitle").click(function(){
  $("#containermatch").css({"transform": "translate(-90vw, 0vh)"})
  $("#containermatch2").show();
  $("#containermatch2").css({"transform": "translate(0vw, -50vh)"})

})

$("#keepswipingtext").click(function(){
  $("#keepswipingtext").css({"transform": "translate(-30vw, -70vh)"})
  $("#containermatch2").css("opacity","0");
})


// $("#answer1text").click(function(){
// $('#notification').fadeIn('slow');
  // HEART ANIMATION = CORRECT
// //
// })

$("#answer2text").click(function(){
  // BROKEN HEART ANIMATION = INCORRECT
})

$("#answer3text").click(function(){
  // BROKEN HEART ANIMATION = INCORRECT
})

//Countdown do these things when time runs out:
// setTimeout(function(){
//   $("div").hide();
//   $("#like").hide();
//   $("#notification").show();
//   $("div").removeClass('blurfilter');
//   $("#keepswipingtext").hide();
//   $("#dislikebutton").hide();
//   $(".score").show();
//   $("#matches").show();
//   $(".score").text(correctGuesses + " matches");
//   $('html,body').animate({
//       scrollTop: $("html").offset().top},
//       'slow');
//   $('body').animate({"background-color" : "red"});
// }, 60000);

// $('#notification').animate({
//     width:'100%',
//     height:'100%',
//     top:'0',
//     left:'0',
//     'font-size':'50px',
//     'line-height':'300px'
// }, 1000);

//
