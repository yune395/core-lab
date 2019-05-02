$( document ).ready(function() {

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
        randomNumber = Math.floor(Math.random() * bios.length);
    // console.log(randomNumber)
        $(".user").text(bios[randomNumber]["name"])
        $(".userbio").text(bios[randomNumber]["bio"])
        $(".age").text(bios[randomNumber]["age"])
})

/////////click on heart and answers append at bottom of screen///////////

$("#like").on('click',function(){

$("#answers").html("")

console.log("test: ", $("#answers").html())

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

console.log("round 2: ", $("#answers").html())

// one of those pick up lines needs a correct tag
      var answers = $("#answers").find(".answerclass"),
      amountOfAnswers = answers.length;
      var ourcorrectAnswer = Math.floor(Math.random() * answers.length);
  // console.log(ourcorrectAnswer) // give us an index for the correct answer
      // clear on each like to prepare for new filling
        $(".answerclass").eq(ourcorrectAnswer).addClass("correctAnswer")
        $(".answerclass").eq(ourcorrectAnswer).find(".answertext").text(bios[randomNumber]["correctAnswer"])


  // $("#answer1text").text(bios[randomNumber]["correctAnswer"]);

    var firstanswer = Math.ceil(Math.random()*2) // choose the order of the other answers

$(".answerclass").each(function(){
    if(!$(this).hasClass("correctAnswer")){
      // console.log(firstanswer)
      // already has content
    if(firstanswer == 1){
        $(this).find(".answertext").text(bios[randomNumber]["answer3"])
          firstanswer = 2;// update firstanswer so that second answer is assigned to the other answer
    }else{
        $(this).find(".answertext").text(bios[randomNumber]["answer2"])
        firstanswer = 1;// update firstanswer so that second answer is assigned to the other answer
      }
    }else{
        $(this).removeClass("answerclass");
      }
})

//////////CORRECT ANSWER CLICK FUNCTION///////////

$("#answer1").click(function(){
          setTimeout(function() {
            $('#container').addClass('blurfilter');
            $('#answers').addClass('blurfilter');
        }, 900);
        $("#answer1").css({"color" : "#4be295"});
        $("#answer1").css({"border" : "2px solid #4be295"});
        $('#rose').delay(900).fadeIn('slow');
        $('.wrong').fadeOut();
        correctGuesses++;
        console.log("correct:", correctGuesses);
        $('#notification').delay(900).fadeIn('slow');
        $('#match').delay(900).fadeIn('slow');
       //$('#keepswiping').fadeIn('slow');
        $('#keepswipingtext').delay(900).fadeIn('slow');
        $(".keepswipingtext" ).removeClass();
        $('#notification').removeClass('blurfilter');
        $('#like').addClass('blurfilter');
        $('#dislikebutton').addClass('blurfilter');
          ///Adding that person to your match list
        $(".matches").html(bios[randomNumber]["name"])
        // here we might want to get rid of our answers to we can reload them nextime

});

//////////WRONG ANSWER CLICK FUNCTION///////////

$(".answerclass").click(function(){
          setTimeout(function() {
            $('#container').addClass('blurfilter');
            $('#answers').addClass('blurfilter');
        }, 900);
        $(".answertext").css({"color" : "red"});
        $(".answertext").css({"background-color" : "black"});
        $(".answertext").css({"border" : "2px solid red"});
        $('.wrong').removeClass('blurfilter');
        $('.wrong').delay(900).fadeIn('slow');
        $('#nomatch').delay(900).fadeIn('slow').removeClass('blurfilter');
        $('#brokenheart').delay(900).fadeIn('slow');
        $('#brokenheart').removeClass();
        // $('div').addClass('blurfilter');
        $('#keepswipingtext').delay(900).fadeIn('slow');
        $( ".keepswipingtext" ).removeClass();

});

//////////KEEP SWIPING CLICK FUNCTION///////////
//continue game after right/wrong answer click

$('#keepswipingtext').click(function(){
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

///RANDOMIZE BIOS AFTER KEEP SWIPING TEXT IS CLICKED

 randomNumber = Math.floor(Math.random() * bios.length);
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
});
//below are still part of the LIKE click function
        $("#answers").show();
        $("#like").css("opacity","0");
})

///////LIKE button smooth scroll function/////////

$("#like").click(function() {
        $('html,body').animate({
        scrollTop: $("#answers").offset().top},
        'slow');
        $( "#dislikebutton" ).hide();
});

//////// 60s COUNTDOWN TIMER FOR END GAME /////////
// var myTimer = function(){

  setTimeout(function(){
          $("div").hide();
          $("#like").hide();
          $(".tryagain").show();
          $("#endheart").show();
          $("div").removeClass('blurfilter');
          $("#keepswipingtext").hide();
          $("#dislikebutton").hide();
          $(".score").show();
          $("#matches").show();
          $(".score").text(correctGuesses + " matches");
          $('html,body').animate({
              scrollTop: $("html").offset().top},
              'slow');
          $('body').animate({"background-color" : "red"});
  }, 60000);
//}


///on click try again button change to green and RANDOMIZE BIOS AGAIN///

$(".tryagain").click(function() {
        $(".tryagain").css({"color" : "#4be295"});
        $(".tryagain").css({"border" : "2px solid #4be295"});
        $( "#matches").delay(2000).fadeOut(0);
        $( ".score").delay(2000).fadeOut(0);
        $( ".tryagain").delay(2000).fadeOut();
        $( "#endheart").delay(2000).fadeOut();
        $("#answers").show();
        $("#container").delay(4000).fadeIn();
        $("#like").delay(3000).fadeIn(0);
        $("#dislikebutton").delay(3000).fadeIn();

        randomNumber = Math.floor(Math.random() * bios.length);
               $(".user").text(bios[randomNumber]["name"])
               $(".userbio").text(bios[randomNumber]["bio"])
               $(".age").text(bios[randomNumber]["age"])
       //below are still part of the LIKE click function
       //myTimer()
       setTimeout(function() {
       window.location.replace("gamepage1practice.html").fadeIn('slow');
     }, 1000);
});






});
