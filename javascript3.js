var myArray = ["I hate",
        "I love",
        "Fuck",
        "You're",
        "I like"];
var myOtherArray = ["pickles", "candy", "this", "stupid", "sldfj"];
var i=0
console.log(myArray[0])

var myContainer = document.getElementById("container");

for (var i = 0; i < myArray.length; i++) {
  var myListItem = document.createElement("li");
  myListItem.innerHTML = myArray[i];
  myContainer.appendChild(myListItem);
}

var counter = 0;
  while(counter < myArray.length || counter < myOtherArray.length){
    //append each element of our array
    var myListItem = document.createElement("li");
console.log (myArray[counter], myOtherArray[counter])

  if(myArray[counter] == undefined){
    myListItem.innerHTML = myOtherArray[counter];

  }else if(myOtherArray [counter] == undefined){
    myListItem.innerHTML = myArray[counter];
  }else{
    myListItem.innerHTML = myArray[counter] + myOtherArray[counter];
  }
    myListItem.innerHTML = myArray[counter] + myOtherArray[counter];
    myContainer.appendChild(myListItem);

    counter++; //is the sme as counter - counter + 1;
  }
