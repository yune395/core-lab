var circle = document.getElementById("radius");
var circle2 = document.getElementById("radius2");
var circle3 = document.getElementById("radius3");
var triangle = document.getElementById("triangle");
var triangle2 = document.getElementById("triangle2");
var text = document.getElementById("halfCircleLeft");
var text2 = document.getElementById("halfCircleRight");
var la = document.getElementById("la");
var square5 = document.getElementById("square5");

var i = 0;

function displayImage() {
i++;
  if (i == 1){
    triangle.style.display = "block";
  }else if(i == 2){
    circle2.style.display = "block";
  }else if(i == 3){
    circle3.style.display = "block";
  }else if(i == 4){
    triangle2.style.display = "block";
  }else if(i == 5){
    halfCircleLeft.style.display = "block";
  }else if(i == 6){
    halfCircleRight.style.display = "block";
  }else if(i == 7){
    square1.style.display = "block";
  }else if(i == 8){
    square2.style.display = "block";
  }else if(i == 9){
    square3.style.display = "block";
  }else if(i == 10){
    triangle2.style.display = "block";
  }else if(i == 11){
    text.style.display = "block";
  }else if(i == 12){
    text2.style.display ="block";
  }else if(i == 13){
    la.style.display = "block";
  }else if(i == 14){
    square5.style.display = "block";
  }else if(i == 15){
    square6.style.display = "block";
  }else if(i == 16){
    square7.style.display = "block";
  }else if(i == 17){
    square8.style.display = "block";
  }else if(i == 18){
    square9.style.display = "block";
  }else{
    i = 0;
  }
}




circle.onclick = displayImage;
