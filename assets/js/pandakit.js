/* Licensed under MIT (https://github.com/CirclepandaLab/pandakit/blob/master/LICENSE)
*/

//return to the top
var scrollbutton = document.getElementById("return-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}
document.getElementById("return-to-top").onclick = function() {topFunction()};
function topFunction() {
 window.scrollTo({top: 0, behavior: 'smooth'});
}