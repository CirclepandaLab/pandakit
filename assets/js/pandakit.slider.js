/**
 * The main class for applying Slide to an element.
 *
 * @author    Precious Tom
 * @copyright Precious Tom. All rights reserved.
 */

/*slider 2*/
var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("carouse2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}