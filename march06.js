
//use brackets for Array, think of Array as a bunch of variables stored together
var myArray = ["oranges", "apples", "pears", "dragonfruits", "grapes"];
var myOtherArray = ["1", "2", "3", "4", "5"];
myArray.push("strawberries") //adding new value to array by "push"
console.log(myArray[0]) //getting first value of our arry

var myContainer = document.getElementById("container");
var myClick = document.get
//while loop
//make sure condition inside of while statement turns false
var counter = 0;
  while(counter < myArray.length || counter < myOtherArray.length){
    //append each element of our array
    var myListItem = document.createElement("li");
console.log (myArray[counter], + "" myOtherArray[counter])

  if(myArray[counter] == undefined){
    myListItem.innerHTML = myOtherArray[counter];

  }else if(myOtherArray [counter] == undefined){
    myListItem.innerHTML = myArray[counter];
  }else{
    myListItem.innerHTML = myArray[counter] + ", " + myOtherArray[counter];
  }
    myListItem.innerHTML = myArray[counter] + myOtherArray[counter];
    myContainer.appendChild(myListItem);

    counter++; //is the sme as counter - counter + 1;
  }
function myClick = function(){
  while(counter < myArray.length || counter < myOtherArray.length){
    //append each element of our array
    var myListItem = document.createElement("li");
console.log (myArray[counter], + "" myOtherArray[counter])

  if(myArray[counter] == undefined){
    myListItem.innerHTML = myOtherArray[counter];

  }else if(myOtherArray [counter] == undefined){
    myListItem.innerHTML = myArray[counter];
  }else{
    myListItem.innerHTML = myArray[counter] + ", " + myOtherArray[counter];
  }
    myListItem.innerHTML = myArray[counter] + myOtherArray[counter];
    myContainer.appendChild(myListItem);

    counter++; //is the sme as counter - counter + 1;
  }
}
  //for loop: similar to while loop, but defines var, for what condition, and then over and over

  for (var i = 0; i < myArray.length; i++) {
    var myListItem = document.createElement("li");
    myListItem.innerHTML = myArray[i];
    myContainer.appendChild(myListItem);


  }
