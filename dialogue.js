var ol = document.getElementsByTagName('ol');

window.addEventListener("scroll", function() {
  ol[0].style.opacity = (1 - (document.body.scrollTop / 16000));
})
