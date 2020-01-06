/* Licensed under MIT (https://github.com/CirclepandaLab/pandakit/blob/master/LICENSE)
*/

//return to the top
$('.return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                      
    }, 500);
});
var timer; 
$('.no-loader').bind('scroll wheel mousemove touchmove tap swipeleft swipeup swipedown swiperight', function(e) { 
    var circle= $('.return-to-top');
    if ($(window).scrollTop() < 50) return circle.fadeOut('slow');
    if (!circle.is(":visible")) {
        circle.fadeIn(20);
    }    
    if (timer) clearTimeout(timer);
    timer = setTimeout(function(){ circle.fadeOut('slow') }, 4000);
}); 
