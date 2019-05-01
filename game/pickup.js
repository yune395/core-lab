var correctGuesses = 0;

/////////INTRO PAGE FUNCTIONS//////////

$('#intropageclick').click(function(e){
    $("div").fadeOut();
        $('#description').fadeIn('slow');
        $('#heartclick').fadeIn('slow');
});

$('#heartclick').click(function(e){
        $('#div').fadeIn('slow');
});

$("#begin").click(function(){
  $("div").fadeOut();
  $('#description').fadeIn('slow');
  $('#heartclick').fadeIn('slow');
});

////////////////////////////////////////////




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

//////////Countdown do these things when time runs out/////////
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
