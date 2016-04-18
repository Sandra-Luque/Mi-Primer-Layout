
var num =100;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});

 $(document).ready(function(){
    $('#info-Lorem').click(function(){
      $('#div-cambiar').load('coder-detail.html'); 
    });
 });