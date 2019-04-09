function everySecond() {
  var newDate = new Date();
  var s = newDate.getSeconds();
  var m = newDate.getMinutes();
  var h = newDate.getHours();
  var degreesToRotate = s * 6;
  var size = 1 + s/60;
  var color = (255/60)* 4;

  s = modifyTime(s);
  m = modifyTime(m);

  //document.getElementById("time").innerHTML = h + ":" + m + ":" + s;

  $('#square').css({
    'transform': 'rotate(' + degreesToRotate + 'deg)'
  });


$('#innercircle').css({
  'transform': 'scale(' + size + ')'
});

$("#square2").css({"background-color": "rgba("+color+","+color+","+color+", 1)"})
}

function modifyTime(t) {
  if (t < 10) {
    t = "0" + t;
  };
  return t;
}

setInterval(everySecond, 1000);
