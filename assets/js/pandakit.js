/* 
* Licensed under MIT (https://github.com/CirclepandaLab/pandakit/blob/master/LICENSE)
*/

// Back to top
let scrollbutton = document.getElementById("return-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// Smooth Scroll
if (scrollbutton) {
	scrollbutton.onclick = function() {
		window.scrollTo({top: 0, behavior: 'smooth'}); 
	};
}

// Progress Input
let progress = document.querySelectorAll("div#progressbar > div[data-rate]");
let setProgress = document.querySelectorAll("div#progressbar > div");
setProgress[0].style.width = progress[0].dataset.rate + "%";