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

// Nav
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

// Naviagation button hidden
window.onload = function(){ 
  if (document.getElementById("myNav") !== null) {
    function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }
    document.getElementById("open").onclick = function() {openNav()};

    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
    document.getElementById("close").onclick = function() {openNav()};
  }
};

// To-do list
// Item addition script
function todo(){
  var item  = document.getElementById('todoinput').value
  var text = document.createTextNode(item)
  var newItem = document.createElement("li")
  newItem.appendChild(text)
  document.getElementById("todolist").appendChild(newItem)
}
document.getElementById("click").onclick = function() {
if(document.querySelector('#todoinput').value === ''){
    alert('Please enter a task.')
  }
  else{todo()}
};
// Item deletion script
function del(){
  var item1 = document.getElementById('todolist');
  item1.removeChild(item1.childNodes[0]);
}
document.getElementById("cross").onclick = function() {del()};
