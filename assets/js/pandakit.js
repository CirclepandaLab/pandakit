/* Licensed under MIT (https://github.com/CirclepandaLab/pandakit/blob/master/LICENSE)
*/

//return to the top
var scrollbutton = document.getElementbyId("return-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}
function topFunction() {
 window.scrollTo({top: 0, behavior: 'smooth'});
}