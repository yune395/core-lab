console.log("testing!");
var myList = document.getElementById("wrapper");


var myFunction =function(){
  var myNewElement = document.createElement("li");

  myNewElement.className = "myaddedListElement";
  myNewElement.innerHTML = "this is new list element!";

  myList.appendChild(myNewElement);
}


var myButton = document.getElementById("imageButton");
var myImageContainer = document.getElementById("myImageContainer");

var addImage = function() {
  var myImage = document.createElement("img");
  myImage.src = "arca2.jpg";
  myImageContainer.appendChild(myImage);

  myButton.className
}
