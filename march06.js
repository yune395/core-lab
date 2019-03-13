
//use brackets for Array, think of Array as a bunch of variables stored together
var myArray = ["BITTER", "RANDOM", "PAINFULLY", "SWEET", "LIVING","SAME","PRETTY","DEFINITELY", "FOUND","HOLY","LOUD","WISE"];
var myOtherArray = ["SWEET", "ORDER", "BEAUTIFUL", "SORROW", "DEAD", "DIFFERENCE","UGLY","MAYBE","MISSING","HELL","SILENCE","FOOL","BABY"];
myArray.push("BIG") //adding new value to array by "push"
console.log(myArray[0]) //getting first value ofs our arry

var myContainer = document.getElementById("wrapper");
//while loop
//make sure condition inside of while statement turns false

  //for loop: similar to while loop, but defines var, for what condition, and then over and over



  for (var i = 0; i < myArray.length; i++) {
    var myListItem = document.createElement("li");
    myListItem.innerHTML = myArray[i] + "____" + myOtherArray[i];
    myContainer.appendChild(myListItem);
  }

document.getElementById("wrapper").style.color = "blue";
document.getElementById("wrapper").style.fontweight ="bold";

var i= 0
  var numbers = [4, 9, 16, 25];

  function myFunction(item, index) {
    myListItem.innerHTML = myListItem.innerHTML + item + "<br>";
  }

      var counter = 0;
  		function OnClick() {
          myListItem.innerHTML = myListItem.innerHTML + ""
          while(counter < myArray.length || counter < myOtherArray.length){
            //append each element of our array
            var myListItem = document.createElement("li");
        console.log (myArray[counter], myOtherArray[counter])

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
            document.body.appendChild(myListItem);
          }
  		}
