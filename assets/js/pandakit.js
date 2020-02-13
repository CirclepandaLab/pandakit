/* 
* Licensed under MIT (https://github.com/CirclepandaLab/pandakit/blob/master/LICENSE)
*/

// Back to top
let scrollbutton = document.getElementById("return-to-top");
if (scrollbutton) {
window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollbutton.style.display = "block";
    } else {
      scrollbutton.style.display = "none";
    }
  }
	scrollbutton.onclick = function() {
		window.scrollTo({top: 0, behavior: 'smooth'}); 
	};
}

window.onload = function(){ }
function speak(m) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10];
  msg.voiceURI = "native";
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 0.8;
  msg.text = m;
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}

//nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar_onscrollhide").style.top = "0";
  } else {
    document.getElementById("navbar_onscrollhide").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
//naviagation button hidden
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
document.getElementById("open").onclick = function() {openNav()};

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
document.getElementById("close").onclick = function() {openNav()};