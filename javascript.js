var radius = 200;
var circle = document.getElementById("radius");
var circle2 = document.getElementById("radius2");
var circle3 = document.getElementById("radius3");
var triangle = document.getElementById("triangle");
var text = document.getElementById("text");
var text2 = document.getElementById("text2");
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
  }else if(i == 13){
    text2.style.display = "block";
  }else {
    i = 0;
  }
}

function changeColor() {
  circle2.style.background= '#'+Math.floor(Math.random()*16777215).toString(16);
  circle3.style.background= '#'+Math.floor(Math.random()*16777215).toString(16);
  circle.style.background= '#'+Math.floor(Math.random()*16777215).toString(16);
  triangle.style.borderBottomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
  triangle2.style.borderBottomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
  halfCircleLeft.style.background= '#'+Math.floor(Math.random()*16777215).toString(16);
  halfCircleRight.style.background= '#'+Math.floor(Math.random()*16777215).toString(16);
  square1.style.background= '#'+Math.floor(Math.random()*16777215).toString(16);
  square2.style.background= '#'+Math.floor(Math.random()*16777215).toString(16);
  square3.style.background= '#'+Math.floor(Math.random()*16777215).toString(16);
  text.style.color= '#'+Math.floor(Math.random()*16777215).toString(16);

}


function changeSize() {
  console.log("radius="+radius)
	if (radius < 400){
		radius = radius + 30;
	}else if(radius == 400){
		radius = radius - 300;
	}else{
		radius = 100;
	}
  circle3.style.height = radius + 'px';
  circle3.style.width = radius + "px";
}
function changeSize2() {
  console.log("radius="+radius)
	if (radius < 400){
		radius = radius + 30;
	}else if(radius == 400){
		radius = radius - 300;
	}else{
		radius = 100;
	}
  square1.style.height = radius + 'px';
  square1.style.width = radius + "px";
}

// call the function on action:
circle.onclick = displayImage;
circle2.onclick = changeColor;
circle3.onclick = changeSize;
halfCircleRight.onclick= changeSize2;
